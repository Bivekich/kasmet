import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Catalog.css';

const Catalog = () => {
  const { t } = useTranslation();

  return (
    <div className="catalog" id="catalog">
      <Container className="py-5">
        <h2 className="text-center">{t('catalogTitle')}</h2>
        <Row>
          {/* Раздел "Готовая продукция" */}
          <Col md={4} className="catalog-section">
            <Card className="catalog-card">
              <Card.Body>
                <Card.Title>{t('finishedProductsTitle')}</Card.Title>
                <ul>
                  <li>{t('finishedAnodesGold')}</li>
                  <li>{t('finishedAnodesSilver')}</li>
                  <li>{t('finishedAnodesPlatinum')}</li>
                  <li>{t('finishedBimetallicProducts')}</li>
                  <li>{t('finishedRefiningProducts')}</li>
                  <li>{t('finishedPalladiumPlatinum')}</li>
                  <li>{t('finishedCatholicSystems')}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Раздел "Сырье" */}
          <Col md={4} className="catalog-section">
            <Card className="catalog-card">
              <Card.Body>
                <Card.Title>{t('rawMaterialsTitle')}</Card.Title>
                <ul>
                  <li>{t('rawCatalysts')}</li>
                  <li>{t('rawElectronics')}</li>
                  <li>{t('rawSlags')}</li>
                  <li>{t('rawBatteries')}</li>
                  <li>{t('rawIndustrialWaste')}</li>
                  <li>{t('rawAlloys')}</li>
                  <li>{t('rawCables')}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Раздел "Покупка лома" */}
          <Col md={4} className="catalog-section">
            <Card className="catalog-card">
              <Card.Body>
                <Card.Title>{t('scrapPurchaseTitle')}</Card.Title>
                <ul>
                  <li>{t('gold')}</li>
                  <li>{t('silver')}</li>
                  <li>{t('platinum')}</li>
                  <li>{t('palladium')}</li>
                  <li>{t('rhodium')}</li>
                  <li>{t('iridium')}</li>
                  <li>{t('ruthenium')}</li>
                  <li>{t('osmium')}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;
