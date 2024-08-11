import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contacts.css'; // Импорт стилей для Contacts

const Contacts = () => {
  return (
    <div className="contacts" id='contacts'>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={4} className="text-start">
            <p className="contact-info">
              <strong>Телефон:</strong> +7 (123) 456-78-90
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h2>КАСМЕТ</h2>
          </Col>
          <Col md={4} className="text-end">
            <p className="contact-info">
              <strong>Электронная почта:</strong> info@kasmet.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;
