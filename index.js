


function initTrails() {

    $('#closetrailinfo').click(closeTrailInfo);
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
        zoom: 15,
        center: {lat: 58.483684, lng: 8.785733},
        mapTypeId: 'satellite',
        mapTypeControl: false,
        disableDefaultUI: true
    });

    window.trailMap = new google.maps.Map(document.getElementById('trailmap'), {
        zoom: 16,
        center: {lat: 58.483684, lng: 8.785733},
        mapTypeId: 'satellite',
        mapTypeControl: false,
        disableDefaultUI: true
    });

    const parkingImage = 'data/imgs/marker_parking.png';

    const parkingMarker = new google.maps.Marker({
        position: { lat: 58.478971, lng: 8.794247 },
        map: window.mainMap,
        title: 'Parkering - Dråbelia',
        icon: parkingImage
    });

    for(let key in trailData) {
        if(trailData.hasOwnProperty(key)) {
            console.log("Add " + key);

            $.ajax({
                type: "GET",
                url: trailData[key].url,
                cache: false,
                dataType: "xml",
                success: function(xml) {
                    // Create and populate a data table.
                    let coordinates = [];

                    $(xml).find('gpx').each(function(){
                        $(this).find('trk').each(function(){
                            $(this).find('trkseg').each(function(){
                                $(this).find('trkpt').each(function() {
                                    coordinates.push({ lat: parseFloat($(this).attr('lat')),
                                        lng: parseFloat($(this).attr('lon'))});
                                });
                            });
                        });
                    });
                    const startMarker = new google.maps.Marker({
                        position: coordinates[0],
                        map: window.mainMap,
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 5,
                            strokeColor: '#00F',
                        },
                        title: "START " + trailData[key].title
                    });

                    const stopMarker = new google.maps.Marker({
                        position: coordinates[coordinates.length - 1],
                        map: window.mainMap,
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 5,
                            strokeColor: '#0F0',
                        },
                        title: "FINISH " + trailData[key].title
                    });

                    const path = new google.maps.Polyline({
                        path: coordinates,
                        geodesic: true,
                        map: window.mainMap,
                        strokeColor: trailData[key].color,
                        strokeOpacity: 0.8,
                        strokeWeight: 6
                    });
                    path.addListener('click', function() {
                        onPathClicked(key, path);
                    });
                    startMarker.addListener('click', function() {
                        onPathClicked(key, path);
                    });
                    stopMarker.addListener('click', function() {
                        onPathClicked(key, path);
                    });

                }
            });
        }
    }

}


function mapUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updatePosition, geolocationFail);
    } else {
        alert("Geolocation not available!");
    }
}

function geolocationFail(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        default:
            alert("An unknown error occurred.");
            break;
    }
}

function updatePosition(pos) {

    const data = { lat: pos.coords.latitude, lng: pos.coords.longitude };
    if(window.mainLocationMarker) {
        window.mainLocationMarker.setPosition(data);
    } else {
        window.mainLocationMarker = new google.maps.Marker({
            position: data,
            map: window.mainMap,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 6,
                strokeColor: '#F00',
            }
        });
        window.mainMap.setCenter(data);
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
}

function closeTrailInfo() {
    $("#trailwindow").hide();
}

function onPathClicked(key, path) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $("#hoverinfo").hide();

    if(trailData.hasOwnProperty(key)) {
        // $("#maininfo").css({
        //     "background-image": "url('data/pics/" + trailData[key].images.main + "')"
        // });
        $("#trailinfoheader").html(trailData[key].title);
        $("#elevationchart").empty();

        let counter = 0;

        $.ajax({
            type: "GET",
            url: trailData[key].url,
            cache: false,
            dataType: "xml",
            success: function (xml) {
                // Create and populate a data table.
                const data = new vis.DataSet();
                let lowest = null;
                let highest = null;
                let coordinates = [];

                $(xml).find('gpx').each(function () {
                    $(this).find('trk').each(function () {
                        $(this).find('trkseg').each(function () {
                            $(this).find('trkpt').each(function () {
                                let lat = $(this).attr('lat');
                                let lon = $(this).attr('lon');
                                $(this).find('ele').each(function () {
                                    let alt = parseFloat($(this).text());
                                    if (lowest === null) {
                                        lowest = highest = alt;
                                    } else if (lowest > alt) {
                                        lowest = alt;
                                    } else if (highest < alt) {
                                        highest = alt;
                                    }
                                    coordinates.push({ lat: parseFloat(lat),
                                        lng: parseFloat(lon)});

                                    data.add({
                                        id: counter++,
                                        x: parseFloat(lon),
                                        y: parseFloat(lat),
                                        z: alt,
                                        style: 50
                                    });
                                });
                            });
                        });
                    });
                });
                let diff = highest - lowest;

                // specify options
                const options = {
                    width: '100%',
                    height: '100%',
                    style: 'bar-size',
                    showPerspective: true,
                    showGrid: false,
                    showShadow: false,
                    keepAspectRatio: true,
                    verticalRatio: diff < 10 ? 0.1 : 0.2,
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

                window.trailMap.setCenter(new google.maps.LatLng(coordinates[0].lat, coordinates[0].lng));

                if(window.lastMapStart) {
                    window.lastMapStart.setMap(null);
                }
                if(window.lastMapStop) {
                    window.lastMapStop.setMap(null);
                }
                if(window.lastMapPath) {
                    window.lastMapPath.setMap(null);
                }
                window.lastMapStart = new google.maps.Marker({
                    position: coordinates[0],
                    map: window.trailMap,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 5,
                        strokeColor: '#00F',
                    },
                    title: "START " + trailData[key].title
                });

                window.lastMapStop = new google.maps.Marker({
                    position: coordinates[coordinates.length - 1],
                    map: window.trailMap,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 5,
                        strokeColor: '#0F0',
                    },
                    title: "FINISH " + trailData[key].title
                });

                window.lastMapPath = new google.maps.Polyline({
                    path: coordinates,
                    geodesic: true,
                    map: window.trailMap,
                    strokeColor: trailData[key].color,
                    strokeOpacity: 0.8,
                    strokeWeight: 6
                });

                //window.trailMap.setCenter(window.lastMapPath.getBounds().getCenter());
                //window.trailMap.fitBounds(window.lastMapPath.getBounds());


                //let info = "<img width=\"200px\" align=\"center\" src=\"data/pics/" + trailData[key].images.main + "\"/><br>";
                let info = "<img width=\"100%\" align=\"center\" src=\"data/pics/start.jpg" + "\"/><br>";
                info += trailData[key].entrancetext;
                $('#trailentrance').html(info);
                $("#trailinfotext").html(trailData[key].infotext);
                $("#trailwindow").show();
                $("#trailfacts").html("Lengde: " + Math.floor(path.inKm() * 10000) / 10 +
                        "m<br>Høydeforskjell: " + Math.floor(diff * 10) / 10 + "m<br></br>" +
                        "Vanskelighetsgrad: " + trailData[key].level);
                // Instantiate our graph object.
                new vis.Graph3d(document.getElementById('elevationchart'), data, options);
            }
        });
    }
};
