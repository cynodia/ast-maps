import Map from 'ol/Map.js';
import View from 'ol/View.js';
import GPX from 'ol/format/GPX.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import BingMaps from 'ol/source/BingMaps.js';
import VectorSource from 'ol/source/Vector.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import {fromLonLat} from 'ol/proj';
import {getLength} from 'ol/sphere.js';

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
        images: {
            main: 'image1.jpeg'
        }
    },
    "ast_tungvekter_kunto": {
        url: 'data/trails/tungvekter/kunto.gpx',
        title: 'Kun To',
        color: '#00ff00',
        images: {
            main: 'image2.jpeg'
        }
    },
    "ast_tungvekter_hundetoppen": {
        url: 'data/trails/tungvekter/hundetoppen.gpx',
        title: 'Hundetoppen',
        color: '#f0e000',
        images: {
            main: 'image4.jpeg'
        }
    },
    "ast_tungvekter_vestbredden": {
        url: 'data/trails/tungvekter/vestbredden.gpx',
        title: 'Vestbredden',
        color: '#a47700',
        images: {
            main: 'image2.jpeg'
        }
    },
    "ast_tungvekter_ostbredden": {
        url: 'data/trails/tungvekter/ostbredden.gpx',
        title: 'Ostbredden',
        color: '#a47700',
        images: {
            main: 'image3.jpeg'
        }
    },
    "ast_tungvekter_sworks": {
        url: 'data/trails/tungvekter/sworks.gpx',
        title: 'S-Works',
        color: '#00a477',
        images: {
            main: 'image4.jpeg'
        }
    },
    "ast_tungvekter_xkjerringene": {
        url: 'data/trails/tungvekter/xkjerringene.gpx',
        title: 'X-Kjærringene',
        color: '#0a4770',
        images: {
            main: 'image5.jpeg'
        }
    }
};

function buildVector(item) {
    return new VectorLayer({
        source: new VectorSource({
            url: /* "http://localhost:1234/" + */ item.url,
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
                            width: 3
                        })
                    });
            }
        }
    });
}

let layers = [ raster ];
let vectors = [];

for(let key in trails) {
    if(trails.hasOwnProperty(key)) {
        console.log("Add " + key);
        const item = buildVector(trails[key]);
        item.set("title", trails[key].title);
        layers.push(item);
        vectors.push(item);
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
            $("#trailinfo").css({
                "background-image": "url('data/pics/" +trails[name].images.main + "')"
            });
            $("#trailinfoheader").html(trails[name].title);
            found = true;
        }
    });
    if(!found) {
        $("#trailinfo").css({
            "background-image": "url('data/pics/image2.jpeg')"
        });
        $("#trailinfoheader").html("Tungvekter");

    }
});