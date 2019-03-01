class GeoLocator {
    
    constructor(app) {
        this.geoId = null;
        this.app = app;
        this.lastData = null;
        this.mainLocationMarker = null;
        this.trailLocationMarker = null;
    }

    mapUserLocation() {
        if (navigator.geolocation) {
            if(this.geoId !== null) {
                this.app.showInfo("Oppdaterer din posisjon...", 10);
                navigator.geolocation.clearWatch(this.geoId);
                this.geoId = null;
            } else {
                this.app.showInfo("Henter din posisjon...", 10);
            }
            navigator.geolocation.getCurrentPosition(this.updatePosition.bind(this), this.geolocationFail.bind(this));
        } else {
            this.app.showInfo("Posisjondata ikke tigjengelig!", 6);
        }
    }

    geolocationFail(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                this.app.showInfo("Brukeren avsol forespørsel om posisjon.");
                break;
            case error.POSITION_UNAVAILABLE:
                this.app.showInfo("Posisjonsinformasjon ikke tilgjengelig.");
                break;
            case error.TIMEOUT:
                this.app.showInfo("Tidsavbrudd i forspørsel om posisjon.");
                break;
            default:
                this.app.showInfo("Posisjonsforespørsel: ukjent feil.");
                break;
        }
    }

    updatePosition(pos) {
        this.lastData = { lat: pos.coords.latitude, lng: pos.coords.longitude };

        console.log(this.lastData);
        if(this.mainLocationMarker) {
            this.mainLocationMarker.setPosition(this.lastData);
            if(this.geoId === null) {
                this.app.showInfo("Posisjon oppdatert<hr>Din posisjon oppdateres også automatisk", 5);
            }
        } else {
            this.app.showInfo("Posisjon mottat<hr>Din posisjon vil etter dette oppdateres automatisk", 6);
            this.mainLocationMarker = new google.maps.Marker({
                position: this.lastData,
                map: this.app.getMainMap(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 6,
                    strokeColor: '#F00',
                }
            });
        }

        if(this.trailLocationMarker) {
            this.trailLocationMarker.setPosition(this.lastData);
        } else {
            this.trailLocationMarker = new google.maps.Marker({
                position: this.lastData,
                map: this.app.getTrailMap(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 6,
                    strokeColor: '#F00',
                }
            });
        }
        if(this.geoId === null) {
            this.geoId = navigator.geolocation.watchPosition(this.updatePosition.bind(this));
            this.app.getMainMap().setCenter(this.lastData);
        }
    }



}