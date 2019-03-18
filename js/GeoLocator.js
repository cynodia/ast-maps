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
                const closestTrail = this.app.getClosestTrailStart(pos.coords.latitude, pos.coords.longitude);
                this.app.setClosestTrail(closestTrail);
                this.app.showInfo("Posisjon oppdatert<hr>Nærmeste sti: <b>" + closestTrail.getTitle() + "</b><br>Klikk her for å åpne.", 6);
            }
        } else {
            const closestTrail = this.app.getClosestTrailStart(pos.coords.latitude, pos.coords.longitude);
            this.app.setClosestTrail(closestTrail);
            this.app.showInfo("Posisjon funnet<hr>Nærmeste sti: <b>" + closestTrail.getTitle() + "</b><br>Klikk her for å åpne.<br>Din posisjon oppdateres heretter automatisk", 6);
            this.mainLocationMarker = new google.maps.Marker({
                position: this.lastData,
                map: this.app.getMainMap(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 6,
                    strokeColor: '#0f0',
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
                    strokeColor: '#0f0',
                }
            });
        }
        if(this.geoId === null) {
            this.geoId = navigator.geolocation.watchPosition(this.updatePosition.bind(this));
            this.app.getMainMap().setCenter(this.lastData);
        }
    }



}