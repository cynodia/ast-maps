import Map from 'ol/Map.js';
import View from 'ol/View.js';
import GPX from 'ol/format/GPX.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import BingMaps from 'ol/source/BingMaps.js';
import VectorSource from 'ol/source/Vector.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import {fromLonLat} from 'ol/proj';

const raster = new TileLayer({
    source: new BingMaps({
        imagerySet: 'AerialWithLabels',
        key: 'AnYziXEovRK4etjl5i7WUDuZjMlhkL6QFxqEh9Yl2_S24mltSUdmJMGyUNwkPci9'
    })
});

const trails = [
    {
        url: 'http://localhost:1234/data/trails/tungvekter/halvfire.gpx',
        title: 'Halv Fire',
        color: '#000000'
    },
    {
        url: 'http://localhost:1234/data/trails/tungvekter/kunto.gpx',
        title: 'Kun To',
        color: '#00ff00'
    },
    {
        url: 'http://localhost:1234/data/trails/tungvekter/hundetoppen.gpx',
        title: 'Hundetoppen',
        color: '#f0e000'
    },
    {
        url: 'http://localhost:1234/data/trails/tungvekter/vestbredden.gpx',
        title: 'Vestbredden',
        color: '#a47700'
    },
    {
        url: 'http://localhost:1234/data/trails/tungvekter/ostbredden.gpx',
        title: 'Ostbredden',
        color: '#a47700'
    },
    {
        url: 'http://localhost:1234/data/trails/tungvekter/sworks.gpx',
        title: 'S-Works',
        color: '#00a477'
    },
    {
        url: 'http://localhost:1234/data/trails/tungvekter/xkjerringene.gpx',
        title: 'X-Kjærringene',
        color: '#0a4770'
    }
];

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
                            width: 3
                        })
                    });
            }
        }
    });
}

let layers = [ raster ];
let vectors = [];

for(let i = 0; i < trails.length; i++) {
    const item = buildVector(trails[i]);
    item.set("title", trails[i].title);
    layers.push(item);
    vectors.push(item);
}

const map = new Map({
    layers: layers,
    target: document.getElementById('map'),
    view: new View({
        center: fromLonLat([8.785800, 58.483912]),
        zoom: 15
    })
});

const displayFeatureInfo = function(pixel) {
    const features = [];
    map.forEachFeatureAtPixel(pixel, function(feature) {
        features.push(feature);
    });
    if (features.length > 0) {
        const info = [];
        let i, ii;
        for (i = 0, ii = features.length; i < ii; ++i) {
            info.push(features[i].getProperties().name);
        }
        document.getElementById('info').innerHTML = info.join(', ') || '(unknown)';
        map.getTarget().style.cursor = 'pointer';
    } else {
        document.getElementById('info').innerHTML = '&nbsp;';
        map.getTarget().style.cursor = '';
    }
};

map.on('pointermove', function(evt) {
    if (evt.dragging) {
        return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
});

map.on('click', function(evt) {
    displayFeatureInfo(evt.pixel);
});