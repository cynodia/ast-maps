class MtbMapApplication {

    constructor(config) {
        this.config = config;
        this.trailMap = null;
        this.infoTimeout = null;
        this.trails = [];
        this.currDetailTrail = null;
        this.show3d = true; /* 3D by default */
        this.mainBounds = null;
        this.geoLocator = new GeoLocator(this);
        this.closestTrail = null;
        this.mapBgActive = false;
        this.toggleButton = null;
        this.ctxMenuVisible = false;
        this.lMap = null;
        this.topologyLayer = null;
        this.satelliteLayer = null;
        this.satelliteActive = false;
        this.satelliteButton = null;

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
                "Små hvite flagg markerer startpunktet på siter som er enveis.<br><br>" +
                "Om du slår på geo-lokasjon(\"siktet\" oppe i høyre hjørne), så vil appen kunne tracke hvor du befinner deg. For hver gang du trykker på denne knappen vil appen også beregne hva som er nærmeste sti-inngang i forhold til din posisjon.<br><br>" +
                "Det er også markert interessepunkter i kartet. Disse inkluderer parkeringsmuligheter og punkter i terrenget som er sentrale eller av interesse av andre grunner." +
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

    closeTrailInfo() {
        this.currDetailTrail.removeFromLMap(this.trailMap);
        this.currDetailTrail.renderToLMap(this.lMap, this.onMapElemClicked.bind(this));
        this.currDetailTrail = null;
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

        //this.infoWindow = new google.maps.InfoWindow({ maxWidth: 300 });

        this.lMap = L.map('lmap', {
            zoomControl: false,
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

        if(localStorage['mtbmaps.settings.showSatellite'] === "true") {
            this.satelliteActive = true;
            this.satelliteLayer.addTo(this.lMap);
        } else {
            this.topologyLayer.addTo(this.lMap);
        }

        this.infoWindow = L.popup();


        this.lMap.on('click', () => {
            if(!mobilecheck()) {
                this.infoWindow.remove();
            }
            if(this.ctxMenuVisible) {
                this.closeContextMenu();
            }
        });

        if(this.config.hasOwnProperty('background') &&
                this.config.background.hasOwnProperty('pos')) {
            const imageBounds = [[this.config.background.pos.north , this.config.background.pos.east], [this.config.background.pos.south, this.config.background.pos.west]];
            this.imageOverlay = L.imageOverlay(this.config.background.src, imageBounds);
            if(localStorage['mtbmaps.settings.showMapBg'] === "true") {
                this.imageOverlay.addTo(this.lMap);
            }
        }

        this.trailMap = L.map('trailmap', {
            zoomControl: false,
        });
        L.tileLayer('https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}',
                {
                    maxNativeZoom: 17,
                    attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
                }
        ).addTo(this.trailMap);

        this.mainBounds = L.latLngBounds();

        /** Add markers */
        for (let key in this.config.markers) {
            if (this.config.markers.hasOwnProperty(key)) {
                const marker = L.marker(this.config.markers[key].position, {
                    icon: L.icon({
                        iconUrl: this.config.markers[key].icon,
                        iconSize: [30, 30],
                        iconAnchor: [15, 30]
                    })
                });
                marker.addTo(this.lMap);

                marker.bindTooltip(this.config.markers[key].title,
                        {
                            //permanent: true,
                            direction: 'auto'
                        }
                );

                this.mainBounds.extend(this.config.markers[key].position.lat, this.config.markers[key].position.lng);
            }
        }
        let trailToLoad = null;
        let trailIdxToLoad = -1;
        if(typeof window.location.hash === 'string' && window.location.hash.length > 1) {
            trailIdxToLoad = parseInt(window.location.hash.substr(1));
        }

        /** Add trails */
        let trailsToLoad = this.config.trails.length;
        for (let i = 0; i < this.config.trails.length; i++) {
            let t = new Trail(this.config.trails[i], this.config.main.levelColors, i, this.infoWindow);
            if(i === trailIdxToLoad) {
                trailToLoad = t;
            }
            t.loadTrail((trail) => {
                trail.renderToLMap(this.lMap, this.onMapElemClicked.bind(this));
                this.mainBounds.extend(trail.getBounds().getNorthEast());
                this.mainBounds.extend(trail.getBounds().getSouthWest());
                trailsToLoad--;
                if(trailsToLoad === 0) {
                    console.log("DONE - fit map...");
                    this.lMap.fitBounds(this.mainBounds);
                }
            });
            this.trails.push(t);
            console.log("Added trail " + t.getTitle());
        }


        this.createContextMenu();
        this.addHelpOverlays();
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
            if(this.trails[i].level > 0) {
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
        this.lMap.fitBounds(this.mainBounds);
    }

    openContextMenu() {
        console.log("Open ctx");
        this.ctxMenuVisible = true;
        this.ctxMenu.fadeIn();
    }

    closeContextMenu() {
        console.log("Close ctx");
        this.ctxMenuVisible = false;
        this.ctxMenu.fadeOut();
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

        ctxBody.append($('<div class="ctxSubHeader">' + this.config.title + '</div>'));
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
/*
        if(this.imageOverlay) {
            this.toggleButton = $('<div class="ctxEntry"></div>');
            this.toggleButton.html("<i class=\"ctxEntryIcon fa " + (this.mapBgActive ? "fa-toggle-on" : "fa-toggle-off") + "\"></i> Vis topologikart");
            this.toggleButton.on('click', this.toggleBackground.bind(this));
            ctxBody.append(this.toggleButton);
        }
*/
        this.satelliteButton = $('<div class="ctxEntry"></div>');
        this.satelliteButton.html("<i class=\"ctxEntryIcon fa " + (this.mapBgActive ? "fa-toggle-on" : "fa-toggle-off") + "\"></i> Satellittkart");
        this.satelliteButton.on('click', this.toggleSatellite.bind(this));
        ctxBody.append(this.satelliteButton);

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
                    window.location = "https://www.mtbmaps.net?c=" + key;
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

    addHelpOverlays() {
        // Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        const self = this;
        L.Control.MtbMapsInfo = L.Control.extend({
            onAdd: function(map) {
                const infoDiv1 = document.createElement('div');
                infoDiv1.style.background = "rgba(255,255,255,.6)";
                infoDiv1.style.padding = "6px";
                infoDiv1.style.borderRight = "1px solid white";
                infoDiv1.style.borderBottom = "1px solid white";
                infoDiv1.style.fontSize = "16px";
                infoDiv1.style.borderRadius = "0 0 6px 0";
                infoDiv1.style.margin = 0;
                infoDiv1.index = 1;
                infoDiv1.innerHTML = "<i style='font-weight:bold; color: " + self.config.main.levelColors[1] + ";' class=\"fa fa-minus\"></i> Lett" +
                        "<br><i style='font-weight:bold; color: " + self.config.main.levelColors[2] + ";' class=\"fa fa-minus\"></i> Middels" +
                        "<br><i style='font-weight:bold; color: " + self.config.main.levelColors[3] + ";' class=\"fa fa-minus\"></i> Vanskelig" +
                        "<hr><img width=\"24\" height=\"24\" src=\"data/imgs/marker_start.png\"/> Start(enveis)";
                infoDiv1.innerHTML += '<br><img width="24" height="24" src="data/imgs/marker_you.png"/> Deg';

                return infoDiv1;
            },
            onRemove: function(map) {
                // Nothing to do here
            }
        });

        const info = new L.Control.MtbMapsInfo({ position: 'topleft'});
        info.addTo(this.lMap);


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

    toggleBackground() {
        this.mapBgActive ? this.imageOverlay.remove() : this.imageOverlay.addTo(this.lMap);
        this.mapBgActive = !this.mapBgActive;
        this.toggleButton.html("<i class=\"ctxEntryIcon fa " + (this.mapBgActive ? "fa-toggle-on" : "fa-toggle-off") + "\"></i> Vis topologikart");
        if(localStorage) {
            localStorage['mtbmaps.settings.showMapBg'] = this.mapBgActive;
        }
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
            localStorage['mtbmaps.settings.showSatellite'] = this.mapBgActive;
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
            trail.removeFromLMap(this.lMap);
            trail.renderToLMap(this.trailMap);
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