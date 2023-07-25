import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importar o ícone padrão e substituir o ícone padrão do Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
delete (L.Icon.Default as any).prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const center : LatLngExpression = [40.7128, -74.006];

const MapWrapper = () => {
  const theme = {
    // Replace this with the actual theme object or context you are using
    direction: 'ltr', // Set the 'direction' property accordingly
  };

  const zoomControlPosition = theme.direction === 'rtl' ? 'bottomleft' : 'bottomright';

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

        <Marker position={center}>
          <Popup>Nova Iorque</Popup>
        </Marker>

        {/* Add the ZoomControl component with dynamic position */}
        <ZoomControl position={zoomControlPosition} />
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
