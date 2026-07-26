import { firm } from '../../data/siteContent';
import './Map.css';

const Map = () => {
  const query = new URLSearchParams({
    q: firm.address.label,
    z: '15',
    output: 'embed',
  });
  const embedUrl = `https://maps.google.com/maps?${query.toString()}`;

  return (
    <iframe
      className="office-map"
      src={embedUrl}
      title="Google Maps location for Marc J. Fratter Attorney at Law"
      loading="lazy"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};

export default Map;
