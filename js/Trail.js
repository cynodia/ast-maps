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
        this.length = 0;
        this.path = null;
        this.lPath = null;
        this.clickCb = null;
        this.levelColors = levelColors;
        this.bounds = L.latLngBounds();
        this.infoWindow = infoWindow;
        this.infoTimeout = null;
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
        if(!this.config.images.trailStart) {
            return null;
        }
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
        return this.length;
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

    parseGpx(xml) {
        const self = this;
        let lowest = null;
        let highest = null;
        if(typeof xml === 'string') {
            xml = (new DOMParser()).parseFromString(xml,"text/xml");;
        }

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
                        const dist = lastLat === null ? 0 : self.calcCrow(lastLat, lastLng, lat, lng);
                        self.distances.push(dist);
                        self.length += (Math.floor(dist) / 1000);
                        self.bounds.extend(L.latLng(lat, lng));
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

        $.ajax({
            type: "GET",
            url: this.config.url,
            cache: false,
            dataType: "xml",
            success: function(xml) {
                this.parseGpx(xml);
                cb(this);
            }.bind(this),
            error: function() {
                console.error("Could not load trail info from " + this.config.url);
                cb(this);
            }.bind(this)
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

    pathClicked() {
        if(this.clickCb) {
            this.clickCb(this);
        }
    }

    removeFromLMap(lMap) {
        if(this.startMarker) {
            this.startMarker.removeFrom(lMap);
        }
        this.lPath.removeFrom(lMap);
    }

    /**
     * Cal be re-used, will only generate objects the firt time
     * @param gMap
     * @param callback
     */
    renderToLMap(lMap, callback, userUpload) {
        if(this.config.bidirectional === false) {
            if (!this.startMarker) {
                this.startMarker = L.marker(this.coordinates[0], {
                    icon: L.icon({
                        iconUrl: 'data/imgs/marker_start.png',
                        iconSize: [30, 30],
                        iconAnchor: [11, 30]
                    })
                });
                this.startMarker.on('click', this.pathClicked.bind(this));
                this.startMarker.bindTooltip("Start: " + this.getTitle(),
                        {
                            //permanent: true,
                            direction: 'auto'
                        }
                );

            }
            this.startMarker.addTo(lMap)
        }

        if(!this.lPath) {
            const options = {
                color: this.getTrailColor(),
                weight: userUpload ? 4 : 5
            };
            options['dashArray'] = userUpload ? "" : "14 8";

            this.lPath = L.polyline(this.coordinates, options);

            if(this.config.title != null) {
                this.lPath.on('click', this.pathClicked.bind(this));

                if (!mobilecheck()) {
                    this.lPath.on('mouseover', (e) => {
                        this.infoWindow.remove();
                        this.infoTimeout = setTimeout(() => {
                            this.infoTimeout = null;
                            this.infoWindow.setLatLng(e.latlng);
                            this.infoWindow.setContent("<b>" + this.getTitle() + "</b>" +
                                    "<br>Lengde: <b>" + Math.floor(this.getLength() * 10000) / 10 + "m" + "</b>" +
                                    "<br>Høydeforskjell: <b>" + (Math.floor(this.getHeightDiff() * 10) / 10) + "m" + "</b>" +
                                    "<br>Vanskelighetsgrad: <b>" + this.getLevelAsText() + "</b>" +
                                    "<br>Enveis: <b>" + (this.isBidirectional() ? "Nei" : "Ja") + "</b>" +
                                    "<br>" + this.getInfoText() +
                                    "<br><span style=\"float:right;\"><a href=\"#\" onclick=\"openTrail(" + this.getId() + ");return false;\">Åpne</a></span><br>");
                            this.infoWindow.openOn(lMap);
                        }, 600);
                    });
                    this.lPath.on('mouseout', () => {
                        if (this.infoTimeout) {
                            clearTimeout(this.infoTimeout);
                            this.infoTimeout = null;
                        }
                        //this.infoWindow.close();
                    });
                }
            }
        }

        this.lPath.addTo(lMap);
        this.clickCb = callback;
    }


}