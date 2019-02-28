class Trail {
    constructor(config, levelColors) {
        this.config = config;
        this.heightDiff = 0;
        this.coordinates = [];
        this.altitudes = [];
        this.startMarker = null;
        this.stopMarker = null;
        this.path = null;
        this.clickCb = null;
        this.levelColors = levelColors;
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

    loadTrail(cb) {
        const self = this;
        $.ajax({
            type: "GET",
            url: this.config.url,
            cache: false,
            dataType: "xml",
            success: function(xml) {
                let lowest = null;
                let highest = null;
                // Create and populate a data table.
                $(xml).find('gpx').each(function(){
                    $(this).find('trk').each(function(){
                        $(this).find('trkseg').each(function(){
                            $(this).find('trkpt').each(function() {
                                self.coordinates.push(
                                        {
                                            lat: parseFloat($(this).attr('lat')),
                                            lng: parseFloat($(this).attr('lon'))
                                        }
                                );
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
            }
        });

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
                    scale: 5,
                    strokeColor: '#00F',
                },
                title: "START " + this.getTitle()
            });
            this.startMarker.addListener('click', this.patchClicked.bind(this));
        } else {
            this.startMarker.setMap(gMap);
        }

        if(!this.stopMarker) {
            this.stopMarker = new google.maps.Marker({
                position: this.coordinates[this.coordinates.length - 1],
                map: gMap,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 5,
                    strokeColor: '#0F0',
                },
                title: "FINISH " + this.getTitle()
            });
            this.stopMarker.addListener('click', this.patchClicked.bind(this));
        } else {
            this.stopMarker.setMap(gMap);
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