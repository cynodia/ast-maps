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
        imagerySet: 'Aerial',
        key: 'AnYziXEovRK4etjl5i7WUDuZjMlhkL6QFxqEh9Yl2_S24mltSUdmJMGyUNwkPci9'
    })
});

const vector1 = new VectorLayer({
    source: new VectorSource({
        url: 'http://localhost:1234/data/trails/tungvekter/test1.gpx',
        format: new GPX()
    }),
    style: function(feature) {
        console.log(feature.getGeometry().getType());
        switch(feature.getGeometry().getType()) {
            case 'Point':
                return new Style({
                    image: new CircleStyle({
                        fill: new Fill({
                            color: 'rgba(255,255,0,0.4)'
                        }),
                        radius: 5,
                        stroke: new Stroke({
                            color: '#ff0',
                            width: 1
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
                        color: '#0f0',
                        width: 3
                    })
                });
        }
    }
});

const vector2 = new VectorLayer({
    source: new VectorSource({
        url: 'http://localhost:1234/data/trails/tungvekter/test2.gpx',
        format: new GPX()
    }),
    style: function(feature) {
        console.log(feature.getGeometry().getType());
        switch(feature.getGeometry().getType()) {
            case 'Point':
                return new Style({
                    image: new CircleStyle({
                        fill: new Fill({
                            color: 'rgba(255,255,0,0.4)'
                        }),
                        radius: 5,
                        stroke: new Stroke({
                            color: '#ff0',
                            width: 1
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
                        color: '#00f',
                        width: 3
                    })
                });
        }
    }
});

const map = new Map({
    layers: [raster, vector1, vector2],
    target: document.getElementById('map'),
    view: new View({
        center: fromLonLat([8.785291, 58.483912]),
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
            info.push(features[i].get('desc'));
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