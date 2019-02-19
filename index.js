import Map from 'ol/Map.js';
import View from 'ol/View.js';
import GPX from 'ol/format/GPX.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import BingMaps from 'ol/source/BingMaps.js';
import VectorSource from 'ol/source/Vector.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import {fromLonLat} from 'ol/proj';
import {getLength} from 'ol/sphere.js';
import vis from 'vis';

const raster = new TileLayer({
    source: new BingMaps({
        imagerySet: 'AerialWithLabels',
        key: 'AnYziXEovRK4etjl5i7WUDuZjMlhkL6QFxqEh9Yl2_S24mltSUdmJMGyUNwkPci9'
    })
});

const trails = {
    "ast_tungvekter_halvfire": {
        url: 'data/trails/tungvekter/halvfire.gpx',
        title: 'Halv Fire',
        color: '#000000',
        infotext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: {
            main: 'image1.jpeg'
        }
    },
    "ast_tungvekter_kunto": {
        url: 'data/trails/tungvekter/kunto.gpx',
        title: 'Kun To',
        color: '#00ff00',
        infotext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: {
            main: 'image2.jpeg'
        }
    },
    "ast_tungvekter_hundetoppen": {
        url: 'data/trails/tungvekter/hundetoppen.gpx',
        title: 'Hundetoppen',
        color: '#f0e000',
        infotext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: {
            main: 'image4.jpeg'
        }
    },
    "ast_tungvekter_vestbredden": {
        url: 'data/trails/tungvekter/vestbredden.gpx',
        title: 'Vestbredden',
        color: '#a47700',
        infotext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: {
            main: 'image2.jpeg'
        }
    },
    "ast_tungvekter_ostbredden": {
        url: 'data/trails/tungvekter/ostbredden.gpx',
        title: 'Østbredden',
        color: '#a47700',
        infotext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: {
            main: 'image3.jpeg'
        }
    },
    "ast_tungvekter_sworks": {
        url: 'data/trails/tungvekter/sworks.gpx',
        title: 'S-Works',
        color: '#00a477',
        infotext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: {
            main: 'image4.jpeg'
        }
    },
    "ast_tungvekter_xkjerringene": {
        url: 'data/trails/tungvekter/xkjerringene.gpx',
        title: 'X-Kjærringene',
        color: '#0a4770',
        infotext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: {
            main: 'image5.jpeg'
        }
    }
};



function buildVector(item) {
    return new VectorLayer({
        source: new VectorSource({
            url: item.url,
            format: new GPX(),
            attributions: item.title
        }),
        style: function (feature) {
            console.log(feature.getGeometry().getType());
            switch (feature.getGeometry().getType()) {
                case 'Point':
                    return new Style({
                        image: new CircleStyle({
                            fill: new Fill({
                                color: 'rgba(255,255,0,0.4)'
                            }),
                            radius: 6,
                            stroke: new Stroke({
                                color: '#ffff00',
                                width: 3
                            })
                        })
                    });
                case 'LineString':
                    return new Style({
                        stroke: new Stroke({
                            color: '#f00',
                            width: 3
                        })
                    });
                case 'MultiLineString':
                    return new Style({
                        stroke: new Stroke({
                            color: item.color,
                            width: 6
                        })
                    });
            }
        }
    });
}

let layers = [ raster ];
let vectors = [];
let lastActive = null;

for(let key in trails) {
    if(trails.hasOwnProperty(key)) {
        console.log("Add " + key);
        const item = buildVector(trails[key]);
        item.set("title", trails[key].title);
        layers.push(item);
        vectors.push(item);
        for(let imagekey in trails[key].images) {
            if(trails[key].images.hasOwnProperty(imagekey)) {
                console.log("Preloading: " + trails[key].images[imagekey]);
                $('<img/>')[0].src = "data/pics/" + trails[key].images[imagekey];
            }
        }
    }
}

const map = new Map({
    layers: layers,
    target: document.getElementById('map'),
    view: new View({
        center: fromLonLat([8.785800, 58.483912]),
        zoom: 15
    })
});


function updateHoverInfo(feature, data) {
    let content = "Trail: " + data.title + "<br>";
    content += "Length: " + Math.floor(getLength(feature.getGeometry())) + "m<br>";
    content += "<br>Click for more info...";

    document.getElementById('hoverinfo').innerHTML = content;
}

map.on('pointermove', function(evt) {
    if (evt.dragging) {
        return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    let found = false;
    map.forEachFeatureAtPixel(pixel, function(feature) {
        const name = feature.getProperties().name;
        if(trails.hasOwnProperty(name)) {
            updateHoverInfo(feature, trails[name]);
            $("#hoverinfo").css({
                top: evt.originalEvent.pageY + 10 + "px",
                left: evt.originalEvent.pageX + 10 + "px"
            }).show();
            map.getTarget().style.cursor = 'pointer';
            found = true;
        }
    });
    if(!found) {
        $("#hoverinfo").hide();
        map.getTarget().style.cursor = '';
    }
});

map.on('click', function(evt) {
    if (evt.dragging) {
        return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    let found = false;
    map.forEachFeatureAtPixel(pixel, function(feature) {
        const name = feature.getProperties().name;
        if(trails.hasOwnProperty(name)) {
            $("#maininfo").css({
                "background-image": "url('data/pics/" + trails[name].images.main + "')"
            });
            $("#trailinfoheader").html(trails[name].title);
            $("#elevationchart").empty();

            found = true;
            lastActive = feature;

            let counter = 0;

            $.ajax({
                type: "GET",
                url: trails[name].url,
                cache: false,
                dataType: "xml",
                success: function(xml) {
                    // Create and populate a data table.
                    const data = new vis.DataSet();
                    let lowest = null;
                    let highest = null;

                    $(xml).find('gpx').each(function(){
                        $(this).find('trk').each(function(){
                            $(this).find('trkseg').each(function(){
                                $(this).find('trkpt').each(function() {
                                    let lat = $(this).attr('lat');
                                    let lon = $(this).attr('lon');
                                    $(this).find('ele').each(function() {
                                        let alt = parseFloat($(this).text());
                                        if(lowest === null) {
                                            lowest = highest = alt;
                                        } else if(lowest > alt) {
                                            lowest = alt;
                                        } else if(highest < alt) {
                                            highest = alt;
                                        }
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
                        width:  '100%',
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
                        xValueLabel: function(x) { return ""; },
                        yValueLabel: function(y) { return ""; }
                    };

                    $("#maintext").hide();
                    $("#trailinfotext").html(trails[name].infotext);
                    $("#trailinfo").show();
                    $("#trailfacts").html("Lengde: " + Math.floor(getLength(feature.getGeometry()) * 10) / 10 + "m<br>Høydeforskjell: " + Math.floor(diff * 10) / 10  + "m");
                    // Instantiate our graph object.
                    new vis.Graph3d(document.getElementById('elevationchart'), data, options);
                }
            });

        }
    });
    if(!found) {
        $("#trailinfo").css({
            "background-image": "url('data/pics/image2.jpeg')"
        });
        $("#trailinfoheader").html("Tungvekter");
        $("#maintext").show();
        $("#trailinfo").hide();
        lastActive = null;
    }
});