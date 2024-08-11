import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import './Catalog.css';

const Catalog = () => {
  return (
    <div className="catalog" id='catalog'>
      <Container className="py-5">
        <h2 className="text-center">Каталог</h2>
        <Row>
          {/* Раздел "Готовая продукция" */}
          <Col md={4} className="catalog-section">
            <Card className="catalog-card">
              <Card.Body>
                <Card.Title>Готовая продукция</Card.Title>
                <ul>
                  <li>Катализаторы</li>
                  <li>Электронные платы</li>
                  <li>Металлургические шлаки</li>
                  <li>Отработанные аккумуляторы</li>
                  <li>Промышленные отходы</li>
                  <li>Сплавы и припои</li>
                  <li>Провода и кабели</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Раздел "Лом" */}
          <Col md={4} className="catalog-section">
            <Card className="catalog-card">
              <Card.Body>
                <Card.Title>Покупка лома</Card.Title>
                <p>Покупка лома у физических и юридических лиц:</p>
                <Table striped bordered hover className="price-table">
                  <thead>
                    <tr>
                      <th>Металл</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Золото (Au)</td>
                      <td>Цену уточните у менеджера</td>
                    </tr>
                    <tr>
                      <td>Серебро (Ag)</td>
                      <td>Цену уточните у менеджера</td>
                    </tr>
                    <tr>
                      <td>Платина (Pt)</td>
                      <td>Цену уточните у менеджера</td>
                    </tr>
                    <tr>
                      <td>Палладий (Pd)</td>
                      <td>Цену уточните у менеджера</td>
                    </tr>
                    <tr>
                      <td>Родий (Rh)</td>
                      <td>Цену уточните у менеджера</td>
                    </tr>
                    <tr>
                      <td>Иридий (Ir)</td>
                      <td>Цену уточните у менеджера</td>
                    </tr>
                    <tr>
                      <td>Рутений (Ru)</td>
                      <td>Цену уточните у менеджера</td>
                    </tr>
                    <tr>
                      <td>Осмий (Os)</td>
                      <td>Цену уточните у менеджера</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Раздел "Сырье" */}
          <Col md={4} className="catalog-section">
            <Card className="catalog-card">
              <Card.Body>
                <Card.Title>Сырье</Card.Title>
                <ul>
                  <li>Катализаторы</li>
                  <li>Электронные платы</li>
                  <li>Металлургические шлаки</li>
                  <li>Отработанные аккумуляторы</li>
                  <li>Промышленные отходы</li>
                  <li>Сплавы и припои</li>
                  <li>Провода и кабели</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;
