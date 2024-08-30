import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Clients.css';

const Clients = () => {
  const { t } = useTranslation();
  
  const logos = [
    { src: "/clients/1.webp", name: "Роскосмос" },
    { src: "/clients/2.jpg", name: "ОДК" },
    { src: "/clients/3.png", name: "Приокский завод цветных металлов" },
    { src: "/clients/4.jpg", name: "РОСЭЛ" },
    { src: "/clients/5.jpg", name: "plaurum" },
    { src: "/clients/6.svg", name: "КРАСЦВЕТМЕТ" },
    { src: "/clients/7.jpg", name: "РОСАТОМ" },
    { src: "/clients/8.png", name: "Ростех" },
    { src: "/clients/9.png", name: 'АО "Щелковский завод ВДМ"', showName: true }, 
  ];

  return (
    <div className="clients" id='clients'>
      <Container className="py-5">
        <h2>{t('clientsTitle')}</h2>
        <Row>
          {logos.map((logo, index) => (
            <Col md={3} sm={6} key={index} className="mb-4 d-flex justify-content-center">
              <div className="client-logo-container">
                <img src={logo.src} alt={t('clientLogo', { index: index + 1 })} className="client-logo" />
                {logo.showName && <div className="client-name">{logo.name}</div>}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Clients;
