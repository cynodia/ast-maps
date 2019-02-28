class MtbMapApplication {

    constructor(config, markers, trails) {
        this.config = {
            main: config,
            markers: markers,
            trails: trails
        };
        this.mainMap = null;
        this.trailMap = null;
        this.infoTimeout = null;
        this.trails = [];
        this.currDetailTrail = null;

        this.updateStaticText();
        $('#closetrailinfo').click(this.closeTrailInfo.bind(this));
    }

    updateStaticText() {
        $('#infotextcontent').html(
                this.config.main.infoText +
                "<h2>mtbmaps.net</h2>" +
                "Målet med mtbmaps.net er å tilby en lettvekts webapplikasjon for navigasjon i typiske norske stinettverk som består av flere små segmenter i motsetning til lange sammenhengende løyper. Det er fokus på å kunne finne inngangen på stiene.<br>" +
                "Løsningen skal være enkel å sette opp og krever ingen dynamisk serviersideteknologi.<br>" +
                "Du kan forke prosjektet på <a href=\"https://github.com/cynodia/ast-maps\">GitHub</a>.<br>" +
                (mobilecheck() ? "Du ser nå på mobilutgaven av webapplikasjonen." : "Du ser nå på desktoputgaven av webapplikasjonen. <a href=\"index_mobile.html\">Mobilversjon</a>")
        );
        $('#headertext').html(mobilecheck() ? this.config.main.mainHeaderMobile : this.config.main.mainHeaderDesktop);
    }

    getMainMap() {
        return this.mainMap;
    }

    getTrailMap() {
        return this.trailMap;
    }

    closeTrailInfo() {
        this.currDetailTrail.renderTo(this.mainMap);
        this.currDetailTrail = null;
        $("#trailwindow").fadeOut(750);
    }

    hideInfo() {
        if (this.infoTimeout != null) {
            clearTimeout(this.infoTimeout);
        }
        $('#infopopup').fadeOut(750);
    }

    showInfo(message, timeout) {
        if (!timeout) {
            timeout = 4;
        }

        $('#infopopup').html(message);
        $('#infopopup').fadeIn(750);
        this.infoTimeout = setTimeout(function () {
            $('#infopopup').fadeOut(750);
            this.infoTimeout = null;
        }.bind(this), timeout * 1000)
    }

    initMap() {
        console.log("Setting up maps...");
        this.mainMap = new google.maps.Map(document.getElementById('map'), {
            zoom: this.config.main.mapZoom,
            center: this.config.main.mapCenter,
            mapTypeId: 'hybrid',
            mapTypeControl: false,
            disableDefaultUI: true
        });

        this.trailMap = new google.maps.Map(document.getElementById('trailmap'), {
            zoom: 16,
            center: this.config.main.mapCenter,
            mapTypeId: 'hybrid',
            mapTypeControl: false,
            disableDefaultUI: true
        });

        /** Add markers */
        for (let key in this.config.markers) {
            if (this.config.markers.hasOwnProperty(key)) {
                new google.maps.Marker({
                    position: this.config.markers[key].position,
                    map: this.mainMap,
                    title: this.config.markers[key].title,
                    icon: this.config.markers[key].icon
                });
            }
        }

        /** Add trails */
        for (let key in this.config.trails) {
            if (this.config.trails.hasOwnProperty(key)) {
                let t = new Trail(this.config.trails[key]);
                t.loadTrail(function (trail) {
                    trail.renderTo(this.mainMap, this.onMapElemClicked.bind(this));
                }.bind(this));
                this.trails.push(t);
                console.log("Added trail " + key);
            }
        }

        this.addHelpOverlays();
        this.hideInfo();
    }

    resetMainMap() {
        this.mainMap.setZoom(this.config.main.mapZoom);
        this.mainMap.setCenter(this.config.main.mapCenter);
    }

    addHelpOverlays() {
        // Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        const infoDiv1 = document.createElement('div');
        infoDiv1.style.background = "rgba(255,255,255,.6)";
        infoDiv1.style.padding = "6px";
        infoDiv1.style.fontSize = "16px";
        infoDiv1.index = 1;
        infoDiv1.innerHTML = "<i style='font-weight:bold; color: #00bb00;' class=\"fa fa-minus\"></i> Lett<br><i style='font-weight:bold; color: #4444ee;' class=\"fa fa-minus\"></i> Middels<br><i style='font-weight:bold; color: #000000;' class=\"fa fa-minus\"></i> Vanskelig" +
                "<hr><i style='color: #00f;' class=\"fa fa-circle\"></i> Start<br><i style='color: #0f0;' class=\"fa fa-circle\"></i> Slutt";
        if(mobilecheck()) {
            infoDiv1.innerHTML += "<br><i style='color: #f00;' class='fa fa-circle'></i> Deg";
        }

        this.mainMap.controls[google.maps.ControlPosition.TOP_LEFT].push(infoDiv1);

        const reloadButton = document.createElement('button');
        reloadButton.setAttribute('id','mapResetBtn');
        reloadButton.style.background = "rgba(255,255,255,.6)";
        reloadButton.style.padding = "12px";
        reloadButton.style.marginTop = "40px";
        reloadButton.style.fontSize = "16px";
        reloadButton.style.cursor = "pointer";
        reloadButton.innerHTML = "<i style=\"cursor:pointer; font-size: 34px;\" class=\"fa fa-home\"></i>";
        reloadButton.onclick = this.resetMainMap.bind(this);

        this.mainMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(reloadButton);
    }

    onMapElemClicked(trail) {
        this.currDetailTrail = trail;

        $("html, body").animate({ scrollTop: 0 }, "slow");

        $("#trailinfoheader").html(trail.getTitle());
        $("#chart3d").empty();
        $("#elevationchart").empty();

        let counter = 0;

        const data = new vis.DataSet();
        const coords = trail.getCoords();
        const alts = trail.getAltitudes();

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
            xValueLabel: function (x) {
                return "";
            },
            yValueLabel: function (y) {
                return "";
            }
        };

        /** TODO: REUSE map path and markers from main map in trail object */

        this.trailMap.setCenter(new google.maps.LatLng(coords[0].lat, coords[0].lng));

        trail.renderTo(this.trailMap);

        //let info = "<img width=\"100%\" align=\"center\" src=\"data/pics/" + trailData[key].images.trailStart + "\"/><br>";
        let info = "<img class=\"shadowed\" width=\"100%\" align=\"center\" src=\"data/pics/start.jpg" + "\"/><br>";
        info += trail.getFindStartText();
        $('#trailentrance').html(info);
        $("#trailinfotext").html(trail.getInfoText());
        $("#trailwindow").fadeIn(750);
        $("#trailfacts").html("<p style=\"margin: 0; text-align:left;\">Lengde: " + Math.floor(trail.getLength() * 10000) / 10 + "m" +
                "<span style=\"float:right;\">Høydefor.: " + Math.floor(trail.getHeightDiff() * 10) / 10 + "m</span></p>" +
                "Vanskelighetsgrad: " + trail.getLevelAsText());
        // Instantiate our graph object.
        new vis.Graph3d(document.getElementById('chart3d'), data, options);
    }
}