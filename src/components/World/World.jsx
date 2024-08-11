import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './World.css';

const cities = [
  { name: 'Дубай', position: [25.276987, 55.296249] },
  { name: 'Ереван', position: [40.179186, 44.499104] },
  { name: 'Шанхай', position: [31.230416, 121.473701] },
  { name: 'Пекин', position: [39.904202, 116.407394] }
];

const World = () => {
  return (
    <div className="world" id='world'>
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <h2>В мире</h2>
            <p>Мы гордимся тем, что имеем возможность и опыт поставки нашей продукции в дружественные страны по всему миру. Наша компания активно развивает международные связи и сотрудничество с партнерами в различных уголках планеты.</p>
            <p><strong>Наши ключевые направления:</strong></p>
            <ul>
              <li><strong>Дубай:</strong> Один из крупнейших финансовых и торговых центров Ближнего Востока. Мы предоставляем наши услуги и продукцию в этот динамично развивающийся рынок, обеспечивая высокое качество и надежность.</li>
              <li><strong>Ереван:</strong> Столицa Армении, важный центр экономического и культурного взаимодействия в регионе. Наши решения помогают удовлетворять потребности местной промышленности и бизнеса.</li>
              <li><strong>Шанхай:</strong> Один из ведущих финансовых и торговых хабов в Китае и на международной арене. Мы активно сотрудничаем с партнерами в этом стратегически важном городе.</li>
              <li><strong>Пекин:</strong> Столица Китая, центр политических и экономических решений. Наша компания обеспечивает поставки и услуги, соответствующие самым высоким стандартам.</li>
            </ul>
          </Col>
          <Col md={6}>
            <div className="map-container">
              <MapContainer center={[20, 0]} zoom={2} className="map">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map(city => (
                  <Marker key={city.name} position={city.position}>
                    <Popup>{city.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default World;
