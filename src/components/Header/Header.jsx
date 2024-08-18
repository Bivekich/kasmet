import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Header.css';
import '../../i18n';

const Header = () => {
  const { t, i18n } = useTranslation();
  
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
          </Nav>
          <Nav className="ml-auto">
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
                <img src="/flags/ru.svg" alt="Русский" className="flag-icon" /> Русский
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="en">
                <img src="/flags/gb.svg" alt="English" className="flag-icon" /> English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-light" className="contact-button">
            <a href="#contacts">{t('contacts')}</a>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
