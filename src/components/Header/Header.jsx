import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" className="header">
      <Container className="header-container">
        <Navbar.Brand href="#home" className="brand">
          КАСМЕТ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#about">О компании</Nav.Link>
            <Nav.Link href="#catalog">Каталог</Nav.Link>
            <Nav.Link href="#world">В мире</Nav.Link>
            <Nav.Link href="#clients">Заказчики</Nav.Link>
            <Nav.Link href="#addresses">Адреса</Nav.Link>
          </Nav>
          <Button variant="outline-light" className="contact-button"><a href="#contacts">Контакты</a></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
