

function mobilecheck() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

function initTrails() {

    $('#infotextcontent').html(
            mainConfig.infoText +
    "<h2>mtbmaps.net</h2>" +
        "Målet med mtbmaps.net er å tilby en lettvekts webapplikasjon for navigasjon i typiske norske stinettverk som består av flere små segmenter i motsetning til lange sammenhengende løyper. Det er fokus på å kunne finne inngangen på stiene.<br>" +
        "Løsningen skal være enkel å sette opp og krever ingen dynamisk serviersideteknologi.<br>" +
        "Du kan forke prosjektet på <a href=\"https://github.com/cynodia/ast-maps\">GitHub</a>.<br>" +
            (mobilecheck() ? "Du ser nå på mobilutgaven av webapplikasjonen." : "Du ser nå på desktoputgaven av webapplikasjonen. <a href=\"index_mobile.html\">Mobilversjon</a>")
    );
    $('#headertext').html(mobilecheck() ? mainConfig.mainHeaderMobile : mainConfig.mainHeaderDesktop);
    $('#closetrailinfo').click(closeTrailInfo);
}

let currDetailTrail = null;
let infoTimeout = null;

function hideInfo() {
    if(infoTimeout != null) {
        clearTimeout(infoTimeout);
    }
    $('#infopopup').fadeOut(750);
}

function showInfo(message, timeout) {
    if(!timeout) {
        timeout = 4;
    }

    $('#infopopup').html(message);
    $('#infopopup').fadeIn(750);
    infoTimeout = setTimeout(function() {
        $('#infopopup').fadeOut(750);
        infoTimeout = null;
    }, timeout * 1000)
}

function initMap() {

    google.maps.LatLng.prototype.kmTo = function(a){
        const e = Math, ra = e.PI/180;
        const b = this.lat() * ra, c = a.lat() * ra, d = b - c;
        const g = this.lng() * ra - a.lng() * ra;
        const f = 2 * e.asin(e.sqrt(e.pow(e.sin(d/2), 2) + e.cos(b) * e.cos(c) * e.pow(e.sin(g/2), 2)));
        return f * 6378.137;
    };

    google.maps.Polyline.prototype.inKm = function(n){
        const a = this.getPath(n), len = a.getLength();
        let dist = 0;
        for (let i = 0; i < len-1; i++) {
            dist += a.getAt(i).kmTo(a.getAt(i+1));
        }
        return dist;
    };

    google.maps.Polyline.prototype.getBounds = function() {
        var bounds = new google.maps.LatLngBounds();
        this.getPath().forEach(function(item, index) {
            bounds.extend(new google.maps.LatLng(item.lat(), item.lng()));
        });
        return bounds;
    };

    window.mainMap = new google.maps.Map(document.getElementById('map'), {
        zoom: mainConfig.mapZoom,
        center: mainConfig.mapCenter,
        mapTypeId: 'hybrid',
        mapTypeControl: false,
        disableDefaultUI: true
    });

    window.trailMap = new google.maps.Map(document.getElementById('trailmap'), {
        zoom: 16,
        center: mainConfig.mapCenter,
        mapTypeId: 'hybrid',
        mapTypeControl: false,
        disableDefaultUI: true
    });

    /** Add markers */
    for(let key in markerData) {
        if (markerData.hasOwnProperty(key)) {
            new google.maps.Marker({
                position: markerData[key].position,
                map: window.mainMap,
                title: markerData[key].title,
                icon: markerData[key].icon
            });
        }
    }

    /** Add trails */
    for(let key in trailData) {
        if(trailData.hasOwnProperty(key)) {
            let t = new Trail(trailData[key]);

            t.loadTrail(function(trail) {
                trail.renderTo(window.mainMap, onMapElemClicked);
            });

            console.log("Add " + key);

        }
    }

    // Create the DIV to hold the control and call the CenterControl()
    // constructor passing in this DIV.
    const infoDiv1 = document.createElement('div');
    infoDiv1.style.background = "rgba(255,255,255,.6)";
    infoDiv1.style.padding = "6px";
    infoDiv1.style.fontSize = "16px";
    infoDiv1.index = 1;
    infoDiv1.innerHTML = "<i style='font-weight:bold; color: #00bb00;' class=\"fa fa-minus\"></i> Lett<br><i style='font-weight:bold; color: #4444ee;' class=\"fa fa-minus\"></i> Middels<br><i style='font-weight:bold; color: #000000;' class=\"fa fa-minus\"></i> Vanskelig";

    window.mainMap.controls[google.maps.ControlPosition.TOP_LEFT].push(infoDiv1);

    const infoDiv2 = document.createElement('div');
    infoDiv2.style.background = "rgba(255,255,255,.6)";
    infoDiv2.style.padding = "6px";
    infoDiv2.style.fontSize = "16px";
    infoDiv2.index = 1;
    infoDiv2.innerHTML = "<i style='color: #00f;' class=\"fa fa-circle\"></i> Start<br><i style='color: #0f0;' class=\"fa fa-circle\"></i> Slutt";

    window.mainMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(infoDiv2);

    hideInfo();
}

let geolocationWatchId = null;

function mapUserLocation() {
    if (navigator.geolocation) {
        if(geolocationWatchId !== null) {
            showInfo("Oppdaterer din posisjon...", 10);
            navigator.geolocation.clearWatch(geolocationWatchId);
            geolocationWatchId = null;
        } else {
            showInfo("Henter din posisjon...", 10);
        }
        navigator.geolocation.getCurrentPosition(updatePosition, geolocationFail);
    } else {
        showInfo("Posisjondata ikke tigjengelig!", 6);
    }
}

function geolocationFail(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            showInfo("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            showInfo("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            showInfo("The request to get user location timed out.");
            break;
        default:
            showInfo("An unknown error occurred.");
            break;
    }
}

function updatePosition(pos) {
    const data = { lat: pos.coords.latitude, lng: pos.coords.longitude };

    console.log(data);
    if(window.mainLocationMarker) {
        window.mainLocationMarker.setPosition(data);
        if(geolocationWatchId === null) {
            showInfo("Posisjon oppdatert<hr>Din posisjon oppdateres også automatisk", 5);
        }
    } else {
        showInfo("Posisjon mottat<hr>Din posisjon vil etter dette oppdateres automatisk", 6);
        window.mainLocationMarker = new google.maps.Marker({
            position: data,
            map: window.mainMap,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 6,
                strokeColor: '#F00',
            }
        });
    }

    if(window.trailLocationMarker) {
        window.trailLocationMarker.setPosition(data);
    } else {
        window.trailLocationMarker = new google.maps.Marker({
            position: data,
            map: window.trailMap,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 6,
                strokeColor: '#F00',
            }
        });
    }
    if(geolocationWatchId === null) {
        geolocationWatchId = navigator.geolocation.watchPosition(updatePosition);
        window.mainMap.setCenter(data);
    }
}

function closeTrailInfo() {
    currDetailTrail.renderTo(window.mainMap);
    currDetailTrail = null;
    $("#trailwindow").fadeOut(750);
}

function onMapElemClicked(trail) {
    currDetailTrail = trail;

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

    window.trailMap.setCenter(new google.maps.LatLng(coords[0].lat, coords[0].lng));

    trail.renderTo(window.trailMap);

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