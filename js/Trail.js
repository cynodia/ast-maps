class Trail {
    constructor(config, levelColors, id, infoWindow) {
        this.config = config;
        this.id = id;
        this.heightDiff = 0;
        this.coordinates = [];
        this.altitudes = [];
        this.distances = [];
        this.startMarker = null;
        this.stopMarker = null;
        this.path = null;
        this.clickCb = null;
        this.levelColors = levelColors;
        this.bounds = null;
        this.infoWindow = infoWindow;
    }

    isBidirectional() {
        return this.config.bidirectional;
    }

    getId() {
        return this.id;
    }

    getInfoText() {
        return this.config.infoText;
    }

    getFindStartText() {
        return this.config.findStartText;
    }

    getStartImage() {
        return "data/pics/" + this.config.images.trailStart;
    }

    getLevel() {
        return this.config.level;
    }

    getTitle() {
        return this.config.title;
    }

    getHeightDiff() {
        return this.heightDiff;
    }

    getCoords() {
        return this.coordinates;
    }

    getAltitudes() {
        return this.altitudes;
    }

    getDistances() {
        return this.distances;
    }

    getLength() {
        if (this.path) {
            return this.path.inKm();
        }
        return 0.0;
    }


    getTrailColor() {
        if(this.config.level === 0) {
            return 'gray';
        }
        if(this.levelColors.hasOwnProperty(this.config.level)) {
            return this.levelColors[this.config.level];
        }
    }

    getLevelAsText() {
        switch(this.config.level) {
            case 2:
                return 'Middles';
            case 3:
                return 'Høy';
            default:
                return 'Lav';
        }
    }

    getBounds() {
        return this.bounds;
    }

    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    calcCrow(lat1, lon1, lat2, lon2) {
        function toRad(v) { return (v * Math.PI / 180); }

        const R = 6371; // km
        const dLat = toRad(lat2-lat1);
        const dLon = toRad(lon2-lon1);
        lat1 = toRad(lat1);
        lat2 = toRad(lat2);

        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return ((R * c) * 1000);
    }

    parseGxp(xml) {
        const self = this;
        let lowest = null;
        let highest = null;

        $(xml).find('gpx').each(function(){
            $(this).find('trk').each(function(){
                let lastLat = null;
                let lastLng = null;
                $(this).find('trkseg').each(function(){
                    $(this).find('trkpt').each(function() {
                        const lat = parseFloat($(this).attr('lat'));
                        const lng = parseFloat($(this).attr('lon'));
                        self.coordinates.push(
                                {
                                    lat: lat,
                                    lng: lng
                                }
                        );
                        self.distances.push(lastLat === null ? 0 : self.calcCrow(lastLat, lastLng, lat, lng));
                        self.bounds.extend(new google.maps.LatLng(lat, lng));
                        lastLat = lat;
                        lastLng = lng;
                        let alt = 0.0;
                        $(this).find('ele').each(function () {
                            alt = parseFloat($(this).text());
                            if (lowest === null) {
                                lowest = highest = alt;
                            } else if (lowest > alt) {
                                lowest = alt;
                            } else if (highest < alt) {
                                highest = alt;
                            }
                        });
                        self.altitudes.push(alt);
                    });
                });
            });
        });
        this.heightDiff = highest - lowest;
    }

    loadTrail(cb) {
        const self = this;

        this.bounds = new google.maps.LatLngBounds();

        $.ajax({
            type: "GET",
            url: this.config.url,
            cache: false,
            dataType: "xml",
            success: function(xml) {
                self.parseGxp(xml);
                cb(self);
            },
            error: function() {
                console.error("Could not load trail info from " + this.config.url);
                cb(self);
            }
        });
    }

    distanceTo(lat, lng) {
        if(this.config.bidirectional) {
            const toStart = this.calcCrow(lat, lng, this.coordinates[0].lat, this.coordinates[0].lng);
            const toEnd = this.calcCrow(lat, lng, this.coordinates[this.coordinates.length - 1].lat, this.coordinates[this.coordinates.length - 1].lng)
            return Math.min(toStart, toEnd);
        } else {
            return this.calcCrow(lat, lng, this.coordinates[0].lat, this.coordinates[0].lng);
        }
    }

    patchClicked() {
        if(this.clickCb) {
            this.clickCb(this);
        }
    }

    /**
     * Cal be re-used, will only generate objects the firt time
     * @param gMap
     * @param callback
     */
    renderTo(gMap, callback) {
        if(this.config.bidirectional === false) {
            if (!this.startMarker) {
                this.startMarker = new google.maps.Marker({
                    position: this.coordinates[0],
                    map: gMap,
                    icon: {
                        url: 'data/imgs/marker_start.png',
                        scaledSize: new google.maps.Size(30, 30)
                    },
                    title: "START " + this.getTitle()
                });
                this.startMarker.addListener('click', this.patchClicked.bind(this));
            } else {
                this.startMarker.setMap(gMap);
            }
        }

        if(!this.path) {
            this.path = new google.maps.Polyline({
                path: this.coordinates,
                geodesic: true,
                map: gMap,
                strokeColor: this.getTrailColor(),
                strokeOpacity: 0.8,
                strokeWeight: 6
            });
            if(this.config.title != null) {
                this.path.addListener('click', this.patchClicked.bind(this));
                if (!mobilecheck()) {
                    this.path.addListener('mouseover', function (e) {
                        this.infoWindow.setPosition(e.latLng);
                        this.infoWindow.setContent("<b>" + this.getTitle() + "</b>" +
                                "<br>Lengde: <b>" + Math.floor(this.getLength() * 10000) / 10 + "m" + "</b>" +
                                "<br>Høydeforskjell: <b>" + (Math.floor(this.getHeightDiff() * 10) / 10) + "m" + "</b>" +
                                "<br>Vanskelighetsgrad: <b>" + this.getLevelAsText() + "</b>" +
                                "<br>Enveis: <b>" + (this.isBidirectional() ? "Nei" : "Ja") + "</b>" +
                                "<br>" + this.getInfoText() +
                                "<br><span style=\"float:right;\"><a href=\"#\" onclick=\"openTrail(" + this.getId() + ");return false;\">Åpne</a></span>");
                        this.infoWindow.open(gMap);
                    }.bind(this));
                    this.path.addListener('mouseout', function () {
                        //this.infoWindow.close();
                    }.bind(this));
                }
            }
        } else {
            this.path.setMap(gMap);
        }

        this.clickCb = callback;
    }

}