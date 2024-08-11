import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Импорт стилей для Footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="py-4">
        <Row className="align-items-start">
          <Col md={4} className="footer-contact">
            <h5>Контакты</h5>
            <p><strong>Телефон:</strong> +7 (123) 456-78-90</p>
            <p><strong>Электронная почта:</strong> info@kasmet.com</p>
          </Col>
          <Col md={4} className="footer-links">
            <h5>Ссылки</h5>
            <ul>
              <li><a href="#about">О компании</a></li>
              <li><a href="#catalog">Каталог</a></li>
              <li><a href="#world">В мире</a></li>
              <li><a href="#clients">Заказчики</a></li>
              <li><a href="#addresses">Адреса</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-about">
            <h5>О компании</h5>
            <p>
              ООО “Касмет” — ваш надежный оператор на рынке драгоценных металлов.
              Наша компания специализируется на торговле драгоценными металлами и техническими изделиями из них.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Касмет. Все права защищены.</p>
            <p className="footer-author">Made with ❤️ by <a href='https://profi.ru/profile/DanilovLI' className="author-name">Lev Danilov</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
