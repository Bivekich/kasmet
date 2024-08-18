import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about" id='about'>
      <Container className="py-5">
        <Row>
          <Col md={6} className="about-text-col">
            <h2>{t('aboutCompanyTitle')}</h2>
            <p>{t('aboutCompanyDescription')}</p>
          </Col>
          <Col md={6} className="about-benefits-col">
            <h3>{t('whyChooseUsTitle')}</h3>
            <ul>
              <li>
                <span className="arrow">→</span>
                <div>
                  <strong>{t('reliabilityTitle')}</strong> {t('reliabilityDescription')}
                </div>
              </li>
              <li>
                <span className="arrow">→</span>
                <div>
                  <strong>{t('expertiseTitle')}</strong> {t('expertiseDescription')}
                </div>
              </li>
              <li>
                <span className="arrow">→</span>
                <div>
                  <strong>{t('individualApproachTitle')}</strong> {t('individualApproachDescription')}
                </div>
              </li>
            </ul>
            <h3>{t('collaborateTitle')}</h3>
            <ul>
              <li>
                <span className="arrow">→</span>
                <div>
                  <strong>{t('highQualityService')}</strong>
                </div>
              </li>
              <li>
                <span className="arrow">→</span>
                <div>
                  <strong>{t('quickTransactions')}</strong>
                </div>
              </li>
              <li>
                <span className="arrow">→</span>
                <div>
                  <strong>{t('transparentConditions')}</strong>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
