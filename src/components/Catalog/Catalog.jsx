import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Catalog.css";

const Catalog = () => {
  const { t } = useTranslation();
  const [goldPrice, setGoldPrice] = useState(null);
  const [rubConversionRate, setRubConversionRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCurrentDateTime = () => {
    const now = new Date();
    const time = `${now.getHours()}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    const date = `${now.getDate()}.${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${now.getFullYear()}`;
    return `${t("priceAt")} ${time} ${date} г`;
  };

  useEffect(() => {
    const fetchGoldPrice = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.gold-api.com/price/XAU");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGoldPrice(data.price);
      } catch (error) {
        console.error("Error fetching gold price:", error);
        setError(t("errorFetchingPrice"));
      } finally {
        setLoading(false);
      }
    };

    const fetchRUBConversionRate = async () => {
      try {
        const response = await axios.get(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        const data = response.data;
        const usdToRub = data.Valute.USD.Value;
        setRubConversionRate(usdToRub);
      } catch (error) {
        console.error("Error fetching RUB conversion rate:", error);
        setError(t("errorFetchingRate"));
      }
    };

    fetchGoldPrice();
    fetchRUBConversionRate();
  }, [t]);

  return (
    <div className="catalog" id="catalog">
      <Container className="py-5">
        <h2 className="text-center">{t("catalogTitle")}</h2>
        <Row>
          {/* Раздел "Готовая продукция" */}
          <Col md={4} className="catalog-section">
            <Card className="catalog-card">
              <Card.Body>
                <Card.Title>{t("finishedProductsTitle")}</Card.Title>
                <ul>
                  <li>{t("finishedAnodesGold")}</li>
                  <li>{t("finishedAnodesSilver")}</li>
                  <li>{t("finishedAnodesPlatinum")}</li>
                  <li>{t("finishedBimetallicProducts")}</li>
                  <li>{t("finishedRefiningProducts")}</li>
                  <li>{t("finishedPalladiumPlatinum")}</li>
                  <li>{t("finishedCatholicSystems")}</li>
                  <li>{t("finishedSilverPowders")}</li>
                  <li>{t("finishedSilverPowder1")}</li>
                  <li>{t("finishedSilverPowder2")}</li>
                  <li>{t("finishedSilverCadmiumOxide")}</li>
                  <li>{t("finishedSilverCopperOxide")}</li>
                  <li>{t("finishedSilverOxide")}</li>
                  <li>{t("finishedSilverNitrate")}</li>
                  <li>{t("finishedActiveSilverPowder")}</li>
                  <li>{t("finishedGranulatedSilverPowder")}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Раздел "Сырье" */}
          <Col md={4} className="catalog-section">
            <Card className="catalog-card">
              <Card.Body>
                <Card.Title>{t("rawMaterialsTitle")}</Card.Title>
                <ul>
                  <li>{t("rawCatalysts")}</li>
                  <li>{t("rawElectronics")}</li>
                  <li>{t("rawSlags")}</li>
                  <li>{t("rawBatteries")}</li>
                  <li>{t("rawIndustrialWaste")}</li>
                  <li>{t("rawAlloys")}</li>
                  <li>{t("rawCables")}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Раздел "Покупка лома" */}
          <Col md={4} className="catalog-section">
            <Card className="catalog-card">
              <Card.Body>
                <Card.Title>{t("scrapPurchaseTitle")}</Card.Title>
                <ul>
                  <li style={{ cursor: "default" }}>
                    {t("gold")}
                    <ul>
                      <p>{getCurrentDateTime()}</p>
                      <li>
                        {" "}
                        {loading && <p>{t("loadingPrice")}</p>}
                        {error && <p>{error}</p>}
                        {goldPrice && (
                          <p>
                            {t("375")}:{" "}
                            {(
                              (goldPrice / 31.1035) *
                              rubConversionRate *
                              ((100 - 5.34) / 100) *
                              0.375
                            ).toFixed(0)}{" "}
                            RUB
                          </p>
                        )}
                      </li>
                      <li>
                        {" "}
                        {loading && <p>{t("loadingPrice")}</p>}
                        {error && <p>{error}</p>}
                        {goldPrice && (
                          <p>
                            {t("585")}:{" "}
                            {(
                              (goldPrice / 31.1035) *
                              rubConversionRate *
                              ((100 - 4.6) / 100) *
                              0.585
                            ).toFixed(0)}{" "}
                            RUB
                          </p>
                        )}
                      </li>
                      <li>
                        {" "}
                        {loading && <p>{t("loadingPrice")}</p>}
                        {error && <p>{error}</p>}
                        {goldPrice && (
                          <p>
                            {t("750")}:{" "}
                            {(
                              (goldPrice / 31.1035) *
                              rubConversionRate *
                              ((100 - 4.3) / 100) *
                              0.75
                            ).toFixed(0)}{" "}
                            RUB
                          </p>
                        )}
                      </li>
                      <li>
                        {" "}
                        {loading && <p>{t("loadingPrice")}</p>}
                        {error && <p>{error}</p>}
                        {goldPrice && (
                          <p>
                            {t("999")}:{" "}
                            {(
                              (goldPrice / 31.1035) *
                              rubConversionRate *
                              ((100 - 4) / 100) *
                              0.999
                            ).toFixed(0)}{" "}
                            RUB
                          </p>
                        )}
                      </li>
                    </ul>
                  </li>
                  <li>{t("silver")}</li>
                  <li>{t("platinum")}</li>
                  <li>{t("palladium")}</li>
                  <li>{t("rhodium")}</li>
                  <li>{t("iridium")}</li>
                  <li>{t("ruthenium")}</li>
                  <li>{t("osmium")}</li>
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
