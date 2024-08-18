import { Container, Row, Col } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import './World.css';

// Задайте иконку маркера
const customIcon = new L.Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Font_Awesome_5_solid_map-marker-alt.svg/898px-Font_Awesome_5_solid_map-marker-alt.svg.png?20180810213559',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const cities = [
  { name: 'Dubai', position: [25.276987, 55.296249] },
  { name: 'Yerevan', position: [40.179186, 44.499104] },
  { name: 'Shanghai', position: [31.230416, 121.473701] },
  { name: 'Beijing', position: [39.904202, 116.407394] }
];

const World = () => {
  const { t } = useTranslation();

  return (
    <div className="world" id='world'>
      <div className="map-container">
        <MapContainer center={[55, 60]} zoom={2} className="map" scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map(city => (
            <Marker key={city.name} position={city.position} icon={customIcon}>
              <Popup>{t(city.name)}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <Container className="text-content">
        <Row>
          <Col md={12}>
            <h2>{t('worldTitle')}</h2>
            <p>{t('worldDescription')}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default World;
