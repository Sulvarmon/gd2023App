import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon, Text, Fill } from 'ol/style';
import { Overlay } from 'ol';
import locationIcon from '../../Images/placeholder.png'

export default function MapComponent() {
    const latitude = 42.166158;
    const longitude = 41.691353;
    const mapContainer = useRef(null);
    const popupContainer = useRef(null);
    const popupOverlay = useRef(null);

    useEffect(() => {
        const map = new Map({
            target: mapContainer.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([longitude, latitude]),
                zoom: 16,
            }),
        });

        // Popup overlay
        popupOverlay.current = new Overlay({
            element: popupContainer.current,
            autoPan: true,
            autoPanAnimation: {
                duration: 250,
            },
        });
        map.addOverlay(popupOverlay.current);

        // Create a marker
        const marker = new Feature({
            geometry: new Point(fromLonLat([longitude, latitude])),
        });

        const vectorSource = new VectorSource({
            features: [marker],
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource,
        });

        map.addLayer(vectorLayer);

        // Set marker style with custom icon
        marker.setStyle(new Style({
            image: new Icon({
                src: locationIcon,
                scale: .05, // Adjusted to make the marker bigger
            }),
            text: new Text({
                text: 'Georgian Development 2023',
                offsetY: -30, // Adjusted based on new marker size
                scale: 1.2, // Adjust as needed
                fill: new Fill({
                    color: '#000',
                }),
                backgroundFill: new Fill({
                    color: '#fff',
                }),
                padding: [10, 10, 10, 10],
                textAlign: 'center',
            }),
        }));

        // Show popup on marker click
        map.on('click', (event) => {
            map.forEachFeatureAtPixel(event.pixel, (feature) => {
                if (feature === marker) {
                    popupOverlay.current.setPosition(feature.getGeometry().getCoordinates());
                    popupContainer.current.innerHTML = `<h3>Location</h3><p>${latitude}, ${longitude}</p>`;
                }
            });
        });

        return () => map.setTarget(undefined);
    }, [latitude, longitude]);

    return (
        <div className="map-container" style={{ position: 'relative', zIndex: 5, height: '100%', width: '100%' }}>
            <div ref={mapContainer} style={{ height: '100%', width: '100%' }} />
            <div ref={popupContainer} className="popup" style={{ display: 'none', position: 'absolute' }} />
        </div>
    );
}
