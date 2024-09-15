import { useTranslation } from "react-i18next";
import { useState } from "react";
import dropDownArrow from "/dropDownArrow.svg";
import finishedProductsImage from "/silver.png";
import rawMaterialsImage from "/melt.png";
import scrapPurchaseImage from "/copper.png";
import "./Catalog.css";

const Catalog = () => {
  const { t } = useTranslation();

  const [showFinishedProducts, setShowFinishedProducts] = useState(false);
  const [showRawMaterials, setShowRawMaterials] = useState(false);
  const [showScrapPurchase, setShowScrapPurchase] = useState(false);

  const [showFinishedSubcategory, setShowFinishedSubcategory] = useState(false);
  const [showFinishedSubcategory2, setShowFinishedSubcategory2] =
    useState(false);

  return (
    <div className="catalog" id="catalog">
      <div className="orange-bg" />
      <div className="orange-bg-left" />
      <div className="orange-bg-right" />
      <div className="catalog-container">
        <h2>{t("catalogTitle")}</h2>

        {/* Finished Products Section */}
        <div className="catalog-section">
          <div
            className="catalog-card"
            onClick={() => setShowFinishedProducts(!showFinishedProducts)}
          >
            <div className="card-header">
              <div className="card-title" style={{ marginBottom: "40px" }}>
                {t("finishedProductsTitle")}
              </div>
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
            </div>
          </div>

          {showFinishedProducts && (
            <div className="description-block">
              <ul className="dropdown-content">
                <li>
                  <div
                    onClick={() =>
                      setShowFinishedSubcategory(!showFinishedSubcategory)
                    }
                  >
                    <span className="arrow">→</span>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                      {t("PreciousMetalProducts")}{" "}
                    </span>
                    <span className="small-arrow">▼</span>
                  </div>
                  {showFinishedSubcategory && (
                    <ul className="subcategory-dropdown">
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedAnodesGold")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedAnodesSilver")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedAnodesPlatinum")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedBimetallicProducts")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedRefiningProducts")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedPalladiumPlatinum")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedCatholicSystems")}
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  {" "}
                  <div
                    onClick={() =>
                      setShowFinishedSubcategory2(!showFinishedSubcategory2)
                    }
                  >
                    <span className="arrow">→</span>

                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                      {t("powders")}{" "}
                    </span>
                    <span className="small-arrow">▼</span>
                  </div>
                  {showFinishedSubcategory2 && (
                    <ul className="subcategory-dropdown">
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedSilverPowder1")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedSilverPowder2")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedSilverCadmiumOxide")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedSilverCopperOxide")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedActiveSilverPowder")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedGranulatedSilverPowder")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedSilverOxide")}
                      </li>
                      <li>
                        <span className="arrow">→</span>
                        {t("finishedSilverNitrate")}
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Raw Materials Section */}
        <div className="catalog-section">
          <div className="catalog-card">
            <div className="card-header">
              <div className="card-title">{t("rawMaterialsTitle")}</div>
              <div className="title-section">
                <img
                  src={dropDownArrow}
                  alt="Dropdown Arrow"
                  className="dropdown-arrow"
                  onClick={() => setShowRawMaterials(!showRawMaterials)}
                />
                <img
                  src={rawMaterialsImage}
                  alt="Raw Materials"
                  className="category-image"
                />
              </div>
            </div>
          </div>

          {showRawMaterials && (
            <div className="description-block">
              <ul className="dropdown-content">
                <li>
                  <span className="arrow">→</span>
                  {t("rawCatalysts")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("rawElectronics")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("rawSlags")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("rawBatteries")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("rawIndustrialWaste")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("rawAlloys")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("rawCables")}
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Scrap Purchase Section */}
        <div className="catalog-section">
          <div className="catalog-card">
            <div className="card-header">
              <div className="card-title" style={{ marginBottom: "40px" }}>
                {t("scrapPurchaseTitle")}
              </div>
              <div className="title-section">
                <img
                  src={dropDownArrow}
                  alt="Dropdown Arrow"
                  className="dropdown-arrow"
                  onClick={() => setShowScrapPurchase(!showScrapPurchase)}
                />
                <img
                  src={scrapPurchaseImage}
                  alt="Scrap Purchase"
                  className="category-image"
                />
              </div>
            </div>
          </div>
          {showScrapPurchase && (
            <div className="description-block">
              <ul className="dropdown-content">
                <li>
                  <span className="arrow">→</span>
                  {t("gold")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("silver")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("platinum")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("palladium")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("rhodium")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("iridium")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("ruthenium")}
                </li>
                <li>
                  <span className="arrow">→</span>
                  {t("osmium")}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
