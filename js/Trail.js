class Trail {
    constructor(config, levelColors) {
        this.config = config;
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
    }

    getInfoText() {
        return this.config.infoText;
    }

    getFindStartText() {
        return this.config.findStartText;
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

    loadTrail(cb) {
        const self = this;

        this.bounds = new google.maps.LatLngBounds();

        $.ajax({
            type: "GET",
            url: this.config.url,
            cache: false,
            dataType: "xml",
            success: function(xml) {
                let lowest = null;
                let highest = null;
                let lastLat = null;
                let lastLng = null;
                // Create and populate a data table.
                $(xml).find('gpx').each(function(){
                    $(this).find('trk').each(function(){
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
                self.heightDiff = highest - lowest;
                cb(self);
            },
            error: function() {
                console.error("Could not load trail info from " + this.config.url);
                cb(self);
            }
        });
    }

    distanceToStart(lat, lng) {
        return this.calcCrow(lat, lng, this.coordinates[0].lat, this.coordinates[0].lng);
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
        if(!this.startMarker) {
            this.startMarker = new google.maps.Marker({
                position: this.coordinates[0],
                map: gMap,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 4,
                    strokeColor: '#ffffff',
                },
                title: "START " + this.getTitle()
            });
            this.startMarker.addListener('click', this.patchClicked.bind(this));
        } else {
            this.startMarker.setMap(gMap);
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
            this.path.addListener('click', this.patchClicked.bind(this));
        } else {
            this.path.setMap(gMap);
        }

        this.clickCb = callback;
    }

}