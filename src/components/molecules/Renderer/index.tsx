import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importar o ícone padrão e substituir o ícone padrão do Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const center : LatLngExpression = [40.7128, -74.006];

const MapWrapper = () => {
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
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        />

        <Marker position={center}>
          <Popup>Nova Iorque</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
