import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Addresses.css';

const Addresses = () => {
  const { t } = useTranslation();

  const addresses = [
    {
      city: t('moscow'),
      address: t('moscow_address'),
      phone: t('moscow_phone'),
      hours: t('moscow_hours'),
    },
  ];

  return (
    <div className="addresses" id="addresses">
      <Container className="py-5">
        <h2 className="text-center">{t('address_title')}</h2>
        <Row>
          {addresses.map((addr, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="address-card">
                <h5>{addr.city}</h5>
                <p>
                  <strong>{t('address_label')}:</strong> {addr.address}
                </p>
                <p>
                  <strong>{t('phone_label')}:</strong> {addr.phone}
                </p>
                <p>
                  <strong>{t('hours_label')}:</strong> {addr.hours}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Addresses;
