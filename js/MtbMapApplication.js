class MtbMapApplication {

    constructor(config) {
        this.config = mmConfigurations[config];
        this.configName = config;
        this.trailMap = null;
        this.infoTimeout = null;
        this.trails = [];
        this.currDetailTrail = null;
        this.show3d = true; /* 3D by default */
        this.mainBounds = {};
        this.geoLocator = new GeoLocator(this);
        this.closestTrail = null;
        this.ctxMenuVisible = false;
        this.trailMenu = null;
        this.trailMenuVisible = false;
        this.trailBody = null;
        this.lMap = null;
        this.titleLayer = null;
        this.trackLayer = null;
        this.markerLayer = null;
        this.topologyLayer = null;
        this.satelliteLayer = null;
        this.satelliteActive = false;
        this.satelliteButton = null;
        this.heatmapLayer = null;
        this.heatmapButton = null;
        this.userAddedTrails = [];
        this.showingTooltips = false;
        this.tooltipTimer = null;

        this.updateStaticText();
        $('#closetrailinfo').click(this.closeTrailInfo.bind(this));
        $('#trail3dBtn').click(this.showTrail3d.bind(this));
        $('#trail2dBtn').click(this.showTrail2d.bind(this));
        $('#infopopup').click(this.infoPopupClicked.bind(this));

        if(this.show3d) {
            $('#trail3dBtn').hide();
            $('#trail2dBtn').show();
        } else {
            $('#trail3dBtn').show();
            $('#trail2dBtn').hide();
        }
    }

    updateStaticText() {
        $('#infotextcontent').html(
                this.config.main.infoText
        );
        document.title = (mobilecheck() ? this.config.main.mainHeaderMobile : this.config.main.mainHeaderDesktop);

        $('#helptextcontent').html(
                "<h2>Bruk</h2>" +
                "Naviger deg rundt i kartet ved å dra for å flytte og klype for å zoome. Klikk på en sti for å få opp teknisk data, beskrivelse og informasjon om hvordan du finner stien.<br><br>" +
                "Små hvite flagg markerer startpunktet på stier som er enveis.<br><br>" +
                "Om du slår på geo-lokasjon(\"siktet\" oppe i høyre hjørne), så vil appen kunne tracke hvor du befinner deg. For hver gang du trykker på denne knappen vil appen også beregne hva som er nærmeste sti-inngang i forhold til din posisjon.<br><br>" +
                "Det er også markert interessepunkter i kartet. Disse inkluderer parkeringsmuligheter og punkter i terrenget som er sentrale eller av interesse av andre grunner.<br><br>" +
                "Du kan veksle mellom topologikart fra <i>Statkart</i> eller sattelittbilde fra <i>ArcGIS</i>. Det er også mulig å legge på et sykkel-heatmap fra Strava - dette er ganske " +
                "lavoppløst, men gir fremdeles en god ide om hvor det er mye aktivitet.<br>" +
                "Etter turen kan du laste opp en GPX-fil for å sammenligne og se hvilke stier du var innom. Denne ligger kun i nettleseren din og vil forsvinne så snart du laster siden på nytt." +
                "<h2>Om mtbmaps.net</h2>" +
                "Målet med mtbmaps.net er å tilby en lettvekts webapplikasjon for navigasjon i typiske norske stinettverk som består av flere små segmenter i motsetning til lange sammenhengende løyper. Det er fokus på å kunne finne inngangen på stiene.<br>" +
                "<br><br>Løsningen er utviklet og driftet av <a href=\"mailto:andreas.tonnesen@gmail.com\">Andreas Tønnesen</a>.<br>" +
                "All data er samlet inn på frivillig basis og kan derfor inneholde feil og være mangelfulle. Ønsker du å bidra, eller har forslag til endringer - send meg en mail!"
        );
    }

    infoPopupClicked() {
        if(this.closestTrail) {
            this.onMapElemClicked(this.closestTrail);
        }
        this.hideInfo();
    }

    setClosestTrail(trail) {
        this.closestTrail = trail;
    }

    getMainMap() {
        return this.lMap;
    }

    getTrailMap() {
        return this.trailMap;
    }

    closeTrailInfo(instant) {
        if(this.currDetailTrail) {
            this.currDetailTrail.removeFromTrackInfo(this.trailMap);
            //this.currDetailTrail.renderTo(this.trackLayer, this.markerLayer, this.onMapElemClicked.bind(this));
            this.currDetailTrail = null;
        }
        $("#trailwindow").fadeOut(500);
        window.location.hash = "";
    }

    hideInfo() {
        if (this.infoTimeout != null) {
            clearTimeout(this.infoTimeout);
        }
        $('#infopopup').fadeOut(500);
    }

    showInfo(message, timeout) {
        if (!timeout) {
            timeout = 4;
        }
        if (this.infoTimeout != null) {
            clearTimeout(this.infoTimeout);
        }

        $('#infopopup').html(message);
        $('#infopopup').fadeIn(500);
        this.infoTimeout = setTimeout(() => {
            $('#infopopup').fadeOut(500);
            this.infoTimeout = null;
        }, timeout * 1000)
    }

    initMap() {
        console.log("Setting up maps...");

        this.lMap = L.map('lmap', {
            zoomControl: false,
            preferCanvas: true,
            renderer: L.canvas({ padding: 0.5, tolerance: 12 })
        });

/*
        this.topologyLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                {
                    maxNativeZoom: 16,
                    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                }
        );
*/
        this.topologyLayer = L.tileLayer('https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}',
                {
                    maxNativeZoom: 17,
                    attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
                }
        );


        this.satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxNativeZoom: 16,
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });

        this.heatmapLayer = L.tileLayer('https://heatmap-external-{s}.strava.com/tiles/ride/bluered/{zoom}/{x}/{y}.png?px=256', {
            maxNativeZoom: 12,
            zoom: 12,
            attribution: 'Tiles &copy; Strava'
        });

        this.trackLayer = new L.FeatureGroup();
        this.titleLayer = new L.FeatureGroup();
        this.markerLayer = new L.FeatureGroup();

        L.control.scale({ imperial: false }).addTo(this.lMap);

        if(localStorage['mtbmaps.settings.showSatellite'] === "true") {
            this.satelliteActive = true;
            this.satelliteLayer.addTo(this.lMap);
        } else {
            this.topologyLayer.addTo(this.lMap);
        }

        if(localStorage['mtbmaps.settings.showHeatmap'] === "true") {
            this.heatmapActive = true;
            this.heatmapLayer.addTo(this.lMap);
        }

        this.infoWindow = L.popup();

        if(!window.printRender) {
            this.lMap.on('zoomend', () => {
                if(this.tooltipTimer) {
                    clearTimeout(this.tooltipTimer);
                    this.tooltipTimer = null;
                }
                console.log("ZOOM: " + this.lMap.getZoom());
                if (this.lMap.getZoom() > 16) {
                    if (!this.showingTooltips) {
                        this.tooltipTimer = setTimeout(() => {
                            this.tooltipTimer = null;
                            this.showingTooltips = true;
                            this.trails.forEach((t) => {
                                t.displayToolTip();
                            });
                        }, 200);
                    }
                } else {
                    if(this.showingTooltips) {
                        this.showingTooltips = false;
                        this.trails.forEach((t) => {
                            t.removeToolTip();
                        });
                    }
                }

                if (this.lMap.getZoom() > 15) {
                    this.lMap.addLayer(this.markerLayer);
                    this.lMap.addLayer(this.trackLayer);
                    this.lMap.removeLayer(this.titleLayer);
                } else if (this.lMap.getZoom() > 13) {
                    this.lMap.removeLayer(this.markerLayer);
                    this.lMap.addLayer(this.trackLayer);
                    this.lMap.removeLayer(this.titleLayer);
                } else {
                    this.lMap.removeLayer(this.markerLayer);
                    this.lMap.removeLayer(this.trackLayer);
                    this.lMap.addLayer(this.titleLayer);
                }
            });
        } else {
            this.lMap.addLayer(this.markerLayer);
            this.lMap.addLayer(this.trackLayer);
            this.lMap.removeLayer(this.titleLayer);
        }

        this.lMap.on('click', (ev) => {
            if(!mobilecheck()) {
                this.infoWindow.remove();
            }
            this.closeContextMenu();
            this.closeTrailMenu();
            const latlng = this.lMap.mouseEventToLatLng(ev.originalEvent);
            console.log(latlng.lat + ', ' + latlng.lng);
        });

        this.trailMap = L.map('trailmap', {
            zoomControl: false,
            dragging: !mobilecheck()
        });
        L.tileLayer('https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}',
                {
                    maxNativeZoom: 17,
                    attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
                }
        ).addTo(this.trailMap);

        let trailToLoad = null;
        let trailIdxToLoad = -1;
        if(typeof window.location.hash === 'string' && window.location.hash.length > 1) {
            trailIdxToLoad = parseInt(window.location.hash.substr(1));
        }
        let currIdx = 0;

        for(let config in mmConfigurations) {
            if (mmConfigurations.hasOwnProperty(config)) {
                const trails = mmConfigurations[config].trails;
                let trailsToLoad = this.config.trails.length;
                const cfg = mmConfigurations[config];
                this.mainBounds[config] = L.latLngBounds();

                /** Add markers */
                for (let key in cfg.markers) {
                    if (cfg.markers.hasOwnProperty(key)) {
                        const marker = L.marker(cfg.markers[key].position, {
                            icon: L.icon({
                                iconUrl: cfg.markers[key].icon,
                                iconSize: [30, 30],
                                iconAnchor: [15, 30]
                            })
                        });
                        /** Add them to the path layer */
                        marker.addTo(this.trackLayer);

                        marker.bindTooltip(cfg.markers[key].title,
                                {
                                    //permanent: true,
                                    direction: 'auto'
                                }
                        );
                        this.mainBounds[config].extend(cfg.markers[key].position.lat, cfg.markers[key].position.lng);
                    }
                }

                /** Add titles */
                const titleMarker = new L.marker([cfg.main.center.lat, cfg.main.center.lng], {
                    icon: L.icon({
                        iconUrl: 'data/imgs/marker_star.png',
                        iconSize: [30, 30],
                        iconAnchor: [15, 30]
                    })
                });
                titleMarker.bindTooltip(cfg.title + '<br>' + trails.length + ' stier', {
                    permanent: true,
                    className: "title-label",
                    offset: [0, 0],
                    direction: 'bottom'
                });
                titleMarker.addTo(this.titleLayer);
                titleMarker.on('click', () => {
                    this.setConfiguration(config);
                });

                /** Add trails */
                for(let i = 0; i < trails.length; i++) {
                    let t = new Trail(trails[i], this.config.main.levelColors, currIdx, this.infoWindow);
                    if (currIdx === trailIdxToLoad) {
                        trailToLoad = t;
                    }
                    t.loadTrail().then((trail) => {
                        trail.renderToMap(this.trackLayer, this.markerLayer, this.onMapElemClicked.bind(this));
                        this.mainBounds[config].extend(trail.getBounds().getNorthEast());
                        this.mainBounds[config].extend(trail.getBounds().getSouthWest());
                    }, () => {
                    }).finally(() => {
                        if (config === this.configName) {
                            trailsToLoad--;
                            if (trailsToLoad === 0) {
                                console.log("DONE - fit map...");
                                this.lMap.fitBounds(this.mainBounds[this.configName]);
                            }
                        }
                    });
                    this.trails.push(t);
                    //console.log("Added trail " + t.getTitle());
                    if(trails[i].images.title !== null && trails[i].images.trailStart === null) {
                        console.log(cfg.title + " Image missing for " + trails[i].title);
                    }
                    currIdx++;
                }
            }
        }


        this.createContextMenu();
        this.createTrailMenu();
        this.populateTrailMenu();
        this.addUIOverlays();
        this.hideInfo();
        if(trailToLoad) {
            this.onMapElemClicked(trailToLoad);
        }

        if(mobilecheck()) {
            this.showInfo("Klikk på stiene for mer informasjon", 5);
        }

    }

    getClosestTrailStart(lat, lng) {
        let closestDist = this.trails[0].distanceTo(lat, lng);
        let closestTrail = this.trails[0];
        for(let i = 1; i < this.trails.length; i++) {
            if(this.trails[i].getLevel() > 0) {
                const dist = this.trails[i].distanceTo(lat, lng);
                if (dist < closestDist) {
                    closestDist = dist;
                    closestTrail = this.trails[i];
                }
            }
        }
        return closestTrail;
    }

    resetMainMap() {
        this.lMap.flyToBounds(this.mainBounds[this.configName]);
    }

    openContextMenu() {
        if(!this.ctxMenuVisible) {
            console.log("Open ctx");
            this.ctxMenuVisible = true;
            this.ctxMenu.fadeIn();
        }
    }

    closeContextMenu() {
        if(this.ctxMenuVisible) {
            console.log("Close ctx");
            this.ctxMenuVisible = false;
            this.ctxMenu.fadeOut();
        }
    }

    openTrailMenu() {
        if(!this.trailMenuVisible) {
            console.log("Open trail");
            this.trailMenuVisible = true;
            this.trailMenu.fadeIn();
        }
    }

    closeTrailMenu() {
        if(this.trailMenuVisible) {
            console.log("Close ctx");
            this.trailMenuVisible = false;
            this.trailMenu.fadeOut();
        }
    }

    parseUserGPX(title, data) {
        let t = new Trail({
            url: 'data/trails/tungvekter/lysloypa.gpx',
            title: title,
            level: 1,
            bidirectional: true,
            findStartText: "",
            infoText: "Opplastet av bruker",
            images: {
                trailStart: null
            }

        }, { 1: '#000000' }, 0, this.infoWindow);
        t.parseGpx(data);
        t.renderToMap(this.trackLayer, this.markerLayer, this.onMapElemClicked.bind(this), true);
        this.mainBounds[this.configName].extend(t.getBounds().getNorthEast());
        this.mainBounds[this.configName].extend(t.getBounds().getSouthWest());
        this.lMap.fitBounds(this.mainBounds[this.configName]);
        this.userAddedTrails.push(t);

        this.showInfo("Brukerdefinert sti lagt til. Denne forsvinner så snart du laster siden på nytt.", 5);

    }

    setConfiguration(key) {
        this.config = mmConfigurations[key];
        this.configName = key;
        this.ctxHeader.html(this.config.title);
        this.resetMainMap();
        this.updateStaticText();
        this.populateTrailMenu();
    }

    createContextMenu() {
        this.ctxMenu = $('<div class="ctxMenu"/>');
        this.ctxMenu.append('<div class="ctxMenuHeader">mtbmaps.net</div>')
        const ctxBackBtn = $('<button class="ctxCloseBtn"><i style="cursor: pointer;" class="fa fa-times-circle"></i></button>');
        ctxBackBtn.on('click', () => {
            this.closeContextMenu();
        });
        this.ctxMenu.append(ctxBackBtn);
        const ctxBody = $('<div class="ctxBody"/>');

        this.ctxHeader = $('<div class="ctxSubHeader">' + this.config.title + '</div>');
        ctxBody.append(this.ctxHeader);
        const ctxInfo = $('<div class="ctxEntry ctxEntryFirst"><i class=\"ctxEntryIcon fa fa-info-circle\"></i> <span style="vertical-align: center;">Om området</span></div>');
        ctxInfo.on('click', () => {
            this.closeContextMenu();
            $('#infotext').fadeIn(500, () => {
                $("html, body").animate({scrollTop: 0}, "slow");
            });
        });
        ctxBody.append(ctxInfo);

        const ctxReset = $('<div class="ctxEntry"><i class=\"ctxEntryIcon fa fa-home\"></i> <span style="vertical-align: center;">Tilbakestill</span></div>');
        ctxReset.on('click', () => {
            this.closeContextMenu();
            this.resetMainMap();
        });
        ctxBody.append(ctxReset);

        this.satelliteButton = $('<div class="ctxEntry"></div>');
        this.satelliteButton.html("<i class=\"ctxEntryIcon fa " + (this.satelliteActive ? "fa-toggle-on" : "fa-toggle-off") + "\"></i> Satellittkart");
        this.satelliteButton.on('click', this.toggleSatellite.bind(this));
        ctxBody.append(this.satelliteButton);

        this.heatmapButton = $('<div class="ctxEntry"></div>');
        this.heatmapButton.html("<i class=\"ctxEntryIcon fa " + (this.heatmapActive ? "fa-toggle-on" : "fa-toggle-off") + "\"></i> Strava heatmap");
        this.heatmapButton.on('click', this.toggleHeatmap.bind(this));
        ctxBody.append(this.heatmapButton);


        this.uploadInput = $('<input type="file" id="fileElem" accept=".gpx" style="display:none"/>');
        ctxBody.append(this.uploadInput);
        this.uploadButton = $('<div class="ctxEntry"></div>');
        this.uploadButton.html("<i class=\"ctxEntryIcon fa fa-upload\"></i> Last opp GPX");
        this.uploadInput.on('change', (event) => {
            const files = event.target.files;
            const reader = new FileReader();
            reader.onload = (evt) => this.parseUserGPX(files[0].name, evt.target.result);
            reader.readAsText(files[0]);
        });
        this.uploadButton.on('click', () => {
            this.uploadInput.click();
            return false;
        });
        ctxBody.append(this.uploadButton);

        if(!mobilecheck()) {
            this.downloadButton = $('<div class="ctxEntry"></div>');
            this.downloadButton.html('<i class="ctxEntryIcon fa fa-download"></i> Eksporter bilde');
            this.downloadButton.append(this.downloadLink);
            this.downloadButton.on('click', () => {
                console.log("IMAGE");
                const self = this;
                $('#exportpopup').html("Genererer bilde...");
                $('#exportpopup').fadeIn(500);
                leafletImage(this.lMap, function (err, canvas) {
                    canvas.toBlob(function (blob) {
                        $('#exportpopup').html("Eksport klar<br><a href=" + URL.createObjectURL(blob) + " download=\"kart.png\">Klikk her for å laste ned</a>");
                        $('#exportpopup a').on('click', (ev) => {
                            $('#exportpopup').fadeOut(500);
                            self.closeContextMenu();
                        });
                    });
                });
            });

            ctxBody.append(this.downloadButton);
        }

        const ctxHelp = $('<div class="ctxEntry"><i class=\"ctxEntryIcon fa fa-question-circle\"></i> <span style="vertical-align: center;">Informasjon</span></div>');
        ctxHelp.on('click', () => {
            this.closeContextMenu();
            $('#helptext').fadeIn(500);
        });
        ctxBody.append(ctxHelp);

        ctxBody.append($('<div class="ctxSubHeader" style="padding-top: 40px;">Tilgjengelige områder</div>'));

        let first = true;
        for(let key in mmConfigurations) {
            if (mmConfigurations.hasOwnProperty(key)) {
                const entry = $('<div class="ctxEntry ' + (first ? 'ctxEntryFirst' : '') + '"><i class=\"ctxEntryIcon fa fa-map\"></i> <span style="vertical-align: center;">' + mmConfigurations[key].title + '</span></div>');
                entry.on('click', () => {
                    this.setConfiguration(key);
                    this.closeContextMenu();
                });
                ctxBody.append(entry);
                first = false;
            }
        }

        this.ctxMenu.append(ctxBody);
        this.ctxMenu.appendTo(document.body);
        this.ctxMenuVisible = false;
        this.ctxMenu.hide();
    }

    createTrailMenu() {
        this.trailMenu = $('<div class="ctxMenu hasInnerScroller"/>');
        this.trailMenu.append('<div class="ctxMenuHeader">Stier</div>')
        const trailBackBtn = $('<button class="ctxCloseBtn"><i style="cursor: pointer;" class="fa fa-times-circle"></i></button>');
        trailBackBtn.on('click', () => {
            this.closeTrailMenu();
        });
        this.trailMenu.append(trailBackBtn);

        const wrapper = $('<div class="scrollerWrapper"/>');
        const content = $('<div class="scrollingContent"/>');

        this.trailBody = $('<div class="ctxBody"/>');
        content.append(this.trailBody);
        wrapper.append(content);

        this.trailMenu.append(wrapper);
        this.trailMenu.appendTo(document.body);
        this.trailMenuVisible = false;
        this.trailMenu.hide();
    }

    populateTrailMenu() {
        this.trailBody.empty();
        const trailHeader = $('<div class="ctxSubHeader">' + this.config.title + '</div>');
        this.trailBody.append(trailHeader);
        let id = 0;

        /** Need to loop trough all configs to find IDs */
        for (let config in mmConfigurations) {
            if (mmConfigurations.hasOwnProperty(config)) {
                const trails = mmConfigurations[config].trails;
                if (config != this.configName) {
                    id += trails.length;
                    continue;
                }

                let first = true;
                for (let i = 0; i < trails.length; i++) {
                    let trail = trails[i];
                    if (trail.level === 0 || trail.title === null) {
                        id++;
                        continue;
                    }
                    const entry = $('<div class="ctxEntry ' + (first ? 'ctxEntryFirst' : '') + '"><i class=\"ctxEntryIcon fa fa-compass\"></i> <span style="vertical-align: center;">' + trail.title + '</span></div>');
                    const t = this.trails[id];
                    entry.on('click', () => {
                        this.closeTrailMenu();
                        this.lMap.flyToBounds(t.getBounds());
                        this.onMapElemClicked(t);
                    });
                    this.trailBody.append(entry);
                    id++;
                    first = false;
                }
            }
        }
    }

    addUIOverlays() {
        // Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        const self = this;
        if(!window.printRender) {
            L.Control.MtbMapsInfo = L.Control.extend({
                onAdd: function (map) {
                    const infoDiv1 = document.createElement('div');
                    infoDiv1.style.background = "rgba(255,255,255,.6)";
                    infoDiv1.style.padding = "6px";
                    infoDiv1.style.borderRight = "1px solid white";
                    infoDiv1.style.borderBottom = "1px solid white";
                    infoDiv1.style.fontSize = "16px";
                    infoDiv1.style.borderRadius = "0 0 6px 0";
                    infoDiv1.style.margin = 0;
                    infoDiv1.index = 1;
                    infoDiv1.innerHTML = "<i style='font-weight:bold; color: gray;' class=\"fa fa-minus\"></i> Veg/sti" +
                            "<br><i style='font-weight:bold; color: " + self.config.main.levelColors[1] + ";' class=\"fa fa-minus\"></i> Lett" +
                            "<br><i style='font-weight:bold; color: " + self.config.main.levelColors[2] + ";' class=\"fa fa-minus\"></i> Middels" +
                            "<br><i style='font-weight:bold; color: " + self.config.main.levelColors[3] + ";' class=\"fa fa-minus\"></i> Vanskelig" +
                            "<hr><img style=\"width: 20px; height: 20px; padding: 0 2px;\" src=\"data/imgs/marker_start2.png\"/> Start(enveis)";
                    infoDiv1.innerHTML += '<br><img width="24" height="24" src="data/imgs/marker_you.png"/> Deg';

                    return infoDiv1;
                },
                onRemove: function (map) {
                    // Nothing to do here
                }
            });

            const info = new L.Control.MtbMapsInfo({position: 'topleft'});
            info.addTo(this.lMap);
        }

        L.Control.MtbMapsMenu = L.Control.extend({
            onAdd: function(map) {
                const btnDiv = document.createElement('div');
                btnDiv.style.margin = 0;

                const locationButton = document.createElement('button');
                locationButton.style.background = "rgba(255,255,255,.6)";
                locationButton.style.padding = "12px";
                locationButton.style.marginRight = "10px";
                locationButton.style.fontSize = "16px";
                locationButton.style.cursor = "pointer";
                locationButton.setAttribute("class", "topButton");
                locationButton.index = 2;
                locationButton.innerHTML = "<i style=\"cursor:pointer; font-size: 34px;\" class=\"fa fa-crosshairs\"></i>";
                locationButton.onclick = (e) => {
                    self.geoLocator.mapUserLocation();
                    L.DomEvent.stopPropagation(e);
                };

                btnDiv.appendChild(locationButton);

                const trailListButton = document.createElement('button');
                trailListButton.style.background = "rgba(255,255,255,.6)";
                trailListButton.style.padding = "12px";
                trailListButton.style.marginRight = "10px";
                trailListButton.style.fontSize = "16px";
                trailListButton.style.cursor = "pointer";
                trailListButton.setAttribute("class", "topButton");
                trailListButton.index = 2;
                trailListButton.innerHTML = "<i style=\"cursor:pointer; font-size: 34px;\" class=\"fa fa-road\"></i>";
                trailListButton.onclick = (e) => {
                    self.openTrailMenu();
                    L.DomEvent.stopPropagation(e);
                };

                btnDiv.appendChild(trailListButton);

                const burgerButton = document.createElement('button');
                burgerButton.style.background = "rgba(255,255,255,.6)";
                burgerButton.style.padding = "12px 16px";
                burgerButton.setAttribute("class", "topRightButton");
                burgerButton.style.fontSize = "16px";
                burgerButton.style.cursor = "pointer";
                burgerButton.innerHTML = "<i style=\"cursor:pointer; font-size: 34px;\" class=\"fa fa-bars\"></i>";
                burgerButton.onclick = (e) => {
                    self.openContextMenu();
                    L.DomEvent.stopPropagation(e);
                };

                btnDiv.appendChild(burgerButton);

                return btnDiv;
            },
            onRemove: function(map) {
                // Nothing to do here
            }
        });

        const buttons = new L.Control.MtbMapsMenu({ position: 'topright'});
        buttons.addTo(this.lMap);
    }

    toggleSatellite() {
        if(this.satelliteActive) {
            this.satelliteLayer.removeFrom(this.lMap);
            this.topologyLayer.addTo(this.lMap);
        } else {
            this.topologyLayer.removeFrom(this.lMap);
            this.satelliteLayer.addTo(this.lMap);
        }
        this.satelliteActive = !this.satelliteActive;
        this.satelliteButton.html("<i class=\"ctxEntryIcon fa " + (this.satelliteActive ? "fa-toggle-on" : "fa-toggle-off") + "\"></i> Satellittkart");
        if(localStorage) {
            localStorage['mtbmaps.settings.showSatellite'] = this.satelliteActive;
        }
    }

    toggleHeatmap() {
        if(this.heatmapActive) {
            this.heatmapLayer.removeFrom(this.lMap);
        } else {
            this.heatmapLayer.addTo(this.lMap);
            this.heatmapLayer.bringToFront();
        }
        this.heatmapActive = !this.heatmapActive;
        this.heatmapButton.html("<i class=\"ctxEntryIcon fa " + (this.heatmapActive ? "fa-toggle-on" : "fa-toggle-off") + "\"></i> Strava heatmap");
        if(localStorage) {
            localStorage['mtbmaps.settings.showHeatmap'] = this.heatmapActive;
        }
    }

    generateGraph3d(trail) {
        const data = new vis.DataSet();
        const coords = trail.getCoords();
        const alts = trail.getAltitudes();
        let counter = 0;

        for(let i = 0; i < coords.length; i++) {
            data.add({
                id: counter++,
                x: coords[i].lng,
                y: coords[i].lat,
                z: alts[i],
                style: 50
            });
        }

        // specify options
        const options = {
            width: '100%',
            height: '100%',
            style: 'bar-size',
            showPerspective: true,
            showGrid: false,
            showShadow: false,
            keepAspectRatio: true,
            verticalRatio: trail.getHeightDiff() < 10 ? 0.1 : 0.2,
            xBarWidth: 0.0003,
            yBarWidth: 0.0003,
            xLabel: '',
            yLabel: '',
            zLabel: 'moh',
            xValueLabel: (x) => {
                return "";
            },
            yValueLabel: (y) => {
                return "";
            }
        };

        new vis.Graph3d(document.getElementById('trailchart'), data, options);
    }

    generateGraph2d(trail) {
        const data = new vis.DataSet();
        const alts = trail.getAltitudes();
        const dists = trail.getDistances();
        let curr = 0;

        for(let i = 0; i < alts.length; i++) {
            curr += dists[i];
            data.add({
                x: curr,
                y: alts[i]
            });
        }

        const options = {
            width: '100%',
            height: '100%',
            moveable: false,
            zoomable: false,
            drawPoints: false,
            style: 'bar',
            showMajorLabels: false
            // start: '0',
            // end: alts.length
        };
        new vis.Graph2d(document.getElementById('trailchart'), data, options);
    }

    showTrail3d() {
        this.show3d = true;
        $('#trail3dBtn').hide();
        $('#trail2dBtn').show();
        if(!this.currDetailTrail) {
            return;
        }
        $("#trailchart").empty();
        this.generateGraph3d(this.currDetailTrail);
    }

    showTrail2d() {
        this.show3d = false;
        $('#trail3dBtn').show();
        $('#trail2dBtn').hide();
        if(!this.currDetailTrail) {
            return;
        }
        $("#trailchart").empty();
        this.generateGraph2d(this.currDetailTrail);
    }

    openTrail(id) {
        this.onMapElemClicked(this.trails[id]);
    }

    openTrailByName(name) {
        name = name.toLowerCase();
        for(let i = 0; i < this.trails.length; i++) {
            if(this.trails[i].getTitle() && this.trails[i].getTitle().toLowerCase() === name) {
                if(this.currDetailTrail) {
                    this.currDetailTrail.removeFromTrackInfo(this.trailMap);
                    this.currDetailTrail = null;
                }
                this.openTrail(i);
                return;
            }
        }
    }

    onMapElemClicked(trail) {
        this.currDetailTrail = trail;

        window.location.hash = trail.getId();
        //$("html, body").animate({ scrollTop: 0 }, "slow");

        $("#trailinfoheader").html(trail.getTitle());
        $("#trailchart").empty();

        //const coords = trail.getCoords();
        //this.trailMap.setCenter(new google.maps.LatLng(coords[0].lat, coords[0].lng));

        //let info = "<img width=\"100%\" align=\"center\" src=\"data/pics/" + trailData[key].images.trailStart + "\"/><br>";
        const entranceImg = trail.getStartImage();
        if(entranceImg) {
            $('#entranceimg').show();
            $('#entranceimg').attr("src", trail.getStartImage());
        } else {
            $('#entranceimg').hide();
        }
        $('#trailentrance').html(trail.getFindStartText());
        $("#trailinfotext").html(trail.getInfoText());
        $("#trailfacts").html("<p style=\"margin: 0; text-align:left;\">Lengde: " + Math.floor(trail.getLength() * 10000) / 10 + "m" +
                "<span style=\"float:right;\">" + (mobilecheck() ? "Høydefor." : "Høydeforskjell") + ": " + Math.floor(trail.getHeightDiff() * 10) / 10 + "m</span></p>" +
                "<p style=\"margin: 0; text-align:left;\">Vanskelighetsgrad: " + trail.getLevelAsText() +
                "<span style=\"float:right;\">Enveis: " + (trail.isBidirectional() ? "Nei" : "Ja") + "</span></p>");
        $("#trailwindow").fadeIn(500, () => {
            //trail.removeFrom(this.trackLayer, this.markerLayer);
            trail.renderToTrackInfo(this.trailMap);
            this.trailMap.fitBounds(trail.getBounds());
            /* graph container must be visible */
            if(this.show3d) {
                this.generateGraph3d(trail);
            } else {
                this.generateGraph2d(trail);
            }
        });
        // Instantiate our graph object.
    }
}