import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { firm } from '../../data/siteContent';
import './Map.css';

const Map = () => {
  const position = [firm.location.lat, firm.location.lng];

  return (
    <MapContainer center={position} zoom={13} className="office-map" scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          {firm.address.label}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
