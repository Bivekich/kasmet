import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Hero.css'; 

const Hero = () => {
  return (
    <div className="hero" id='home'>
      <div className="hero-overlay">
        <Container className="pt-5">
          <Row className="align-items-center">
            <Col md={6} className="hero-text-col">
              <div className="hero-text-box">
                <h1>Поставщик решений<br />для авиационной<br />и металлургической отраслей</h1>
              </div>
            </Col>
            <Col md={6} className="hero-carousel-col">
              <Carousel className="hero-carousel">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x600"
                    alt="Slide 1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x600"
                    alt="Slide 2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x600"
                    alt="Slide 3"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="hero-description">
              <p>
                Поставка запасных частей, станков, промышленной продукции, сырья оборудования для высокотехнологичных предприятий авиационной отрасли. Техническое обслуживание и ремонт воздушных судов.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
