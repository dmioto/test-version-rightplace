import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import the icon images for the marker
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Extend the Default class to add custom icon URLs
class CustomIcon extends L.Icon.Default {
  constructor(options) {
    super(options);
    this.options = { ...L.Icon.Default.prototype.options, ...options };
    this._getIconUrl = function (name) {
      return icon;
    };
    this._getIconRetinaUrl = function (name) {
      return icon;
    };
    this._getShadowUrl = function () {
      return iconShadow;
    };
  }
}

const center: [number, number] = [40.7128, -74.006]; // LatLngTuple type for center

const MapWrapper = () => {
  const theme = {
    // Replace this with the actual theme object or context you are using
    direction: 'ltr', // Set the 'direction' property accordingly
  };

  const zoomControlPosition = 'bottom' + (theme.direction === 'rtl' ? 'left' : 'right');

  return (
    <div
      style={{
        margin: '30px auto',
        height: '100%',
        position: 'relative',
        zIndex: 1,
        border: '1px solid #333',
        overflow: 'hidden',
      }}
    >
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100%' }}
        zoomControl={false} // Disable the default zoom control
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
          minZoom={10}
          maxZoom={17}
        />

        {/* Set the custom icon for the marker */}
        <Marker position={center} icon={new CustomIcon()}>
          <Popup>Nova Iorque</Popup>
        </Marker>

        {/* Add the ZoomControl component with dynamic position */}
        <ZoomControl position={zoomControlPosition as ControlPosition} />
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
