import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Clients.css';

const Clients = () => {
  const logos = [
    "/clients/1.jpg",
    "/clients/2.jpg",
    "/clients/3.png",
    "/clients/4.jpg",
    "/clients/5.jpg",
    "/clients/6.png",
    "/clients/7.jpg",
    "/clients/8.png",
  ];

  return (
    <div className="clients">
      <Container className="py-5">
        <h2>Наши Заказчики</h2>
        <Row>
          {logos.map((logo, index) => (
            <Col md={3} sm={6} key={index} className="mb-4 d-flex justify-content-center">
              <img src={logo} alt={`Client Logo ${index + 1}`} className="client-logo" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Clients;
