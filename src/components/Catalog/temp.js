import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Catalog.css";
import { useState } from "react"; // Add this import
import dropDownArrow from "/dropDownArrow.svg"; // Adjust the path as necessary
import finishedProductsImage from "/melt.png"; // Adjust the path as necessary
import rawMaterialsImage from "/silver.png"; // Adjust the path as necessary
import scrapPurchaseImage from "/copper.png"; // Adjust the path as necessary

const Catalog = () => {
  const { t } = useTranslation();

  // Add state for dropdowns
  const [showFinishedProducts, setShowFinishedProducts] = useState(false);
  const [showRawMaterials, setShowRawMaterials] = useState(false);
  const [showScrapPurchase, setShowScrapPurchase] = useState(false);

  return (
    <div className="catalog" id="catalog">
      <Container className="py-5">
        <h2 className="text-center">{t("catalogTitle")}</h2>
        <Row>
          {/* Раздел "Готовая продукция" */}
          <Col md={4} className="catalog-section">
            <Card
              className="catalog-card"
              onClick={() => setShowFinishedProducts(!showFinishedProducts)}
            >
              <Card.Body style={{ padding: '0' }}>
                <div
                  className="card-header"
                  onClick={() => setShowFinishedProducts(!showFinishedProducts)}
                >
                  <Card.Title >
                    {t("finishedProductsTitle")}
                    <div className="title-section">
                      <img
                        src={dropDownArrow}
                        alt="Dropdown Arrow"
                        className="dropdown-arrow"
                      />
                      <img
                        src={finishedProductsImage}
                        alt="Finished Products"
                        className="category-image"
                      />
                    </div>
                  </Card.Title>
                </div>
                {showFinishedProducts && ( // Dropdown content
                  <ul>
                    <li><span className="arrow">→</span>{t("finishedAnodesGold")}</li>
                    <li><span className="arrow">→</span>{t("finishedAnodesSilver")}</li>
                    <li><span className="arrow">→</span>{t("finishedAnodesPlatinum")}</li>
                    <li><span className="arrow">→</span>{t("finishedBimetallicProducts")}</li>
                    <li><span className="arrow">→</span>{t("finishedRefiningProducts")}</li>
                    <li><span className="arrow">→</span>{t("finishedPalladiumPlatinum")}</li>
                    <li><span className="arrow">→</span>{t("finishedCatholicSystems")}</li>
                    <li><span className="arrow">→</span>{t("finishedSilverPowders")}</li>
                    <li><span className="arrow">→</span>{t("finishedSilverPowder1")}</li>
                    <li><span className="arrow">→</span>{t("finishedSilverPowder2")}</li>
                    <li><span className="arrow">→</span>{t("finishedSilverCadmiumOxide")}</li>
                    <li><span className="arrow">→</span>{t("finishedSilverCopperOxide")}</li>
                    <li><span className="arrow">→</span>{t("finishedSilverOxide")}</li>
                    <li><span className="arrow">→</span>{t("finishedSilverNitrate")}</li>
                    <li><span className="arrow">→</span>{t("finishedActiveSilverPowder")}</li>
                    <li><span className="arrow">→</span>{t("finishedGranulatedSilverPowder")}</li>
                  </ul>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Раздел "Сырье" */}
          <Col md={4} className="catalog-section">
            <Card
              className="catalog-card"
              onClick={() => setShowRawMaterials(!showRawMaterials)}
            >
              <Card.Body style={{ padding: "0" }}>
                <div
                  className="card-header"
                  onClick={() => setShowRawMaterials(!showRawMaterials)}
                >
                  <Card.Title>
                    {t("rawMaterialsTitle")}
                    <div className="title-section">
                      <img
                        src={dropDownArrow}
                        alt="Dropdown Arrow"
                        className="dropdown-arrow"
                      />
                      <img
                        src={rawMaterialsImage}
                        alt="Raw Materials"
                        className="category-image"
                      />
                    </div>
                  </Card.Title>
                </div>
                {showRawMaterials && ( // Dropdown content
                  <ul>
                    <li>{t("rawCatalysts")}</li>
                    <li>{t("rawElectronics")}</li>
                    <li>{t("rawSlags")}</li>
                    <li>{t("rawBatteries")}</li>
                    <li>{t("rawIndustrialWaste")}</li>
                    <li>{t("rawAlloys")}</li>
                    <li>{t("rawCables")}</li>
                  </ul>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Раздел "Покупка лома" */}
          <Col md={4} className="catalog-section">
            <Card
              className="catalog-card"
              onClick={() => setShowScrapPurchase(!showScrapPurchase)}
            >
              <Card.Body style={{ padding: '0' }}>
                <div
                  className="card-header"
                  onClick={() => setShowScrapPurchase(!showScrapPurchase)}
                >
                  <Card.Title>
                    {t("scrapPurchaseTitle")}
                    <div className="title-section">
                      <img
                        src={dropDownArrow}
                        alt="Dropdown Arrow"
                        className="dropdown-arrow"
                      />{" "}
                      <img
                        src={scrapPurchaseImage}
                        alt="Scrap Purchase"
                        className="category-image"
                      />
                    </div>
                  </Card.Title>
                </div>
                {showScrapPurchase && ( // Dropdown content
                  <ul>
                    <li>{t("gold")}</li>
                    <li>{t("silver")}</li>
                    <li>{t("platinum")}</li>
                    <li>{t("palladium")}</li>
                    <li>{t("rhodium")}</li>
                    <li>{t("iridium")}</li>
                    <li>{t("ruthenium")}</li>
                    <li>{t("osmium")}</li>
                  </ul>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;

