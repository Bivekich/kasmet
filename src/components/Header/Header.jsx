import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Header.css';
import '../../i18n';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [goldPrice, setGoldPrice] = useState(null);
  const [rubConversionRate, setRubConversionRate] = useState(null);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('');

  // Функция для получения данных о ценах на золото и курсе RUB
  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const response = await fetch('https://api.gold-api.com/price/XAU');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGoldPrice(data.price);
        setLastUpdated(new Date().toLocaleString());
      } catch (error) {
        console.error('Error fetching gold price:', error);
        setError(t('errorFetchingPrice'));
      }
    };

    const fetchRUBConversionRate = async () => {
      try {
        const response = await axios.get(
          'https://www.cbr-xml-daily.ru/daily_json.js',
        );
        const data = response.data;
        const usdToRub = data.Valute.USD.Value;
        setRubConversionRate(usdToRub);
      } catch (error) {
        console.error('Error fetching RUB conversion rate:', error);
        setError(t('errorFetchingRate'));
      }
    };

    fetchGoldPrice();
    fetchRUBConversionRate();
  }, [t]);

  const calculatePrice = (purity) => {
    if (goldPrice && rubConversionRate) {
      return (
        (goldPrice / 31.1035) *
        rubConversionRate *
        ((100 - 5) / 100) * // 5% комиссия
        purity
      ).toFixed(0);
    }
    return '-';
  };

  const handleSelect = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <Navbar variant="dark" expand="lg" className="header">
      <Container className="header-container">
        <Navbar.Brand href="#home" className="brand">
          КАСМЕТ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#about">{t('company')}</Nav.Link>
            <Nav.Link href="#catalog">{t('catalog')}</Nav.Link>
            <Nav.Link href="#world">{t('world')}</Nav.Link>
            <Nav.Link href="#clients">{t('clients')}</Nav.Link>
            <Nav.Link href="#addresses">{t('addresses')}</Nav.Link>
            <NavDropdown title={t('prices')} id="gold-price-dropdown">
              <NavDropdown.Header>{t('goldPrices')}</NavDropdown.Header>
              {error && (
                <NavDropdown.Item>{t('errorFetchingPrice')}</NavDropdown.Item>
              )}
              {goldPrice && (
                <>
                  <NavDropdown.Item>
                    {t('375')}: {calculatePrice(0.375)} RUB
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {t('585')}: {calculatePrice(0.585)} RUB
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {t('750')}: {calculatePrice(0.75)} RUB
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {t('999')}: {calculatePrice(0.999)} RUB
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    {t('pricesUpdatedAt')}: {lastUpdated}
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>

            <NavDropdown
              title={
                <span>
                  {i18n.language === 'ru' ? 'Русский' : 'English'}
                  <img
                    src={`/flags/${i18n.language === 'ru' ? 'ru' : 'gb'}.svg`}
                    alt={i18n.language}
                    className="flag-icon"
                  />
                </span>
              }
              id="language-dropdown"
              onSelect={handleSelect}
            >
              <NavDropdown.Item eventKey="ru">
                <img src="/flags/ru.svg" alt="Русский" className="flag-icon" />{' '}
                Русский
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="en">
                <img src="/flags/gb.svg" alt="English" className="flag-icon" />{' '}
                English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button variant="outline-light" className="ml-auto contact-button">
            <a href="#contacts">{t('contacts')}</a>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
