import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set up the default icon for the marker
delete L.Icon.Default.prototype._getIconUrl;
const markerIcon = L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41], // Default marker size
    iconAnchor: [12, 41], // Position the icon
});

export default function Map() {
    const latitude = 42.166158;
    const longitude = 41.691353;

    // Custom icon with text
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-text">Georgian Development 2023</div>',
        iconSize: [120, 40], // Adjust size as needed
        iconAnchor: [60, 110], // Center the text
        // Position the text above the marker
        popupAnchor: [0, -20], // Adjust for popup position if needed
    });

    return (
        <div className="w5 h5">
            <MapContainer center={[latitude, longitude]} zoom={16} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[latitude, longitude]} icon={markerIcon}>
                    <Popup>
                        Location: {latitude}, {longitude}
                    </Popup>
                </Marker>
                <Marker position={[latitude, longitude]} icon={customIcon} />
            </MapContainer>
        </div>
    );
}
