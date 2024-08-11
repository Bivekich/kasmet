import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about" id='about'>
      <Container className="py-5">
        <Row>
          <Col md={6} className="about-text-col">
            <h2>О компании</h2>
            <p>
              ООО “Касмет” — ваш надежный оператор на рынке драгоценных металлов.
              Наша компания специализируется на торговле драгоценными металлами и техническими изделиями из них, включая золото, серебро, платину, палладий, родий и иридий. Мы также активно занимаемся покупкой и реализацией лома драгоценных металлов.
            </p>
          </Col>
          <Col md={6} className="about-benefits-col">
            <h3>Почему выбирают нас</h3>
            <ul>
              <li>
                <span className="arrow">→</span>
                <div>
                  <strong>Надежность и опыт:</strong> имеем все необходимые разрешительные документы и многолетний опыт в сфере драгоценных металлов.
                </div>
              </li>
              <li>
                <span className="arrow">→</span>
                <div>
                  <strong>Экспертиза:</strong> Мы предоставляем услуги экспертизы, гарантируя объективную оценку качества и подлинности металлов.
                </div>
              </li>
              <li>
                <span className="arrow">→</span>
                <div>
                  <strong>Индивидуальный подход:</strong> Работаем как с частными клиентами, так и с корпоративными партнерами, предлагая уникальные решения, адаптированные под нужды каждого клиента.
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12} className="about-additional-benefits">
            <h3>Сотрудничая с нами, вы можете рассчитывать на:</h3>
            <Row>
              <Col md={4} className="benefit-col">
                <Card className="benefit-card">
                  <Card.Body>
                    <Card.Title>Высококачественное обслуживание</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="benefit-col">
                <Card className="benefit-card">
                  <Card.Body>
                    <Card.Title>Оперативное выполнение сделок</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="benefit-col">
                <Card className="benefit-card">
                  <Card.Body>
                    <Card.Title>Прозрачные условия сотрудничества</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <p className="about-final-text">
              Мы стремимся предложить вам самые выгодные условия на рынке драгоценных металлов, обеспечивая надежное и успешное партнерство.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
