import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container className="py-4">
        <Row className="align-items-start">
          <Col xs={12} md={4} className="footer-contact">
            <h5>{t('footer_contacts')}</h5>
            <p><strong>{t('phone_label')}:</strong> +7 (123) 456-78-90</p>
            <p><strong>{t('email_label')}:</strong> info@kasmet.com</p>
          </Col>
          <Col xs={12} md={4} className="footer-links">
            <h5>{t('footer_links')}</h5>
            <ul>
              <li><a href="#about">{t('about')}</a></li>
              <li><a href="#catalog">{t('catalog')}</a></li>
              <li><a href="#world">{t('world')}</a></li>
              <li><a href="#clients">{t('clients')}</a></li>
              <li><a href="#addresses">{t('addresses')}</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="footer-about">
            <h5>{t('footer_about')}</h5>
            <p>
              {t('footer_description')}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} {t('company_name')}. {t('all_rights_reserved')}</p>
            <p className="footer-author">
              {t('made_with')} ❤️ {t('by')} <a href='https://biveki.ru' className="author-name">Lev Danilov</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
