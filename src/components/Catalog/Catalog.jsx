import { useTranslation } from "react-i18next";
import { useState } from "react";
import dropDownArrow from "/dropDownArrow.svg"; // Adjust the path as necessary
import finishedProductsImage from "/melt.png"; // Adjust the path as necessary
import rawMaterialsImage from "/silver.png"; // Adjust the path as necessary
import scrapPurchaseImage from "/copper.png"; // Adjust the path as necessary
import "./Catalog.css"; // Import the custom CSS

const Catalog = () => {
  const { t } = useTranslation();

  const [showFinishedProducts, setShowFinishedProducts] = useState(false);
  const [showRawMaterials, setShowRawMaterials] = useState(false);
  const [showScrapPurchase, setShowScrapPurchase] = useState(false);

  return (
    <div className="catalog" id="catalog">
      <div className="orange-bg" /> 
      <div className="orange-bg-left"/>
      <div className="orange-bg-right"/>
      <div className="catalog-container">
        <h2>{t("catalogTitle")}</h2>

        {/* Finished Products Section */}
        <div className="catalog-section">
          <div className="catalog-card">
            <div className="card-header">
              <div className="card-title" style={{ marginBottom: "40px" }}>
                {t("finishedProductsTitle")}
              </div>
              <div className="title-section">
                <img
                  src={dropDownArrow}
                  alt="Dropdown Arrow"
                  className="dropdown-arrow"
                  onClick={() => setShowFinishedProducts(!showFinishedProducts)} // Make only the arrow clickable
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
              <li>
                <span className="arrow">→</span>
                {t("finishedSilverPowders")}
              </li>
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
                {t("finishedSilverOxide")}
              </li>
              <li>
                <span className="arrow">→</span>
                {t("finishedSilverNitrate")}
              </li>
              <li>
                <span className="arrow">→</span>
                {t("finishedActiveSilverPowder")}
              </li>
              <li>
                <span className="arrow">→</span>
                {t("finishedGranulatedSilverPowder")}
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
                  onClick={() => setShowRawMaterials(!showRawMaterials)} // Make only the arrow clickable
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
                  onClick={() => setShowScrapPurchase(!showScrapPurchase)} // Make only the arrow clickable
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
