import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Addresses.css';

const Addresses = () => {
  const addresses = [
    {
      city: 'Москва',
      address: 'ул. Ленина, д. 10',
      phone: '+7 (495) 123-45-67',
      hours: 'Пн-Пт: 09:00 - 18:00, Сб: 10:00 - 15:00',
      additional: 'Вход со стороны двора.'
    },
    {
      city: 'Санкт-Петербург',
      address: 'пр. Невский, д. 25',
      phone: '+7 (812) 987-65-43',
      hours: 'Пн-Пт: 10:00 - 19:00, Сб: 11:00 - 16:00',
      additional: 'Требуется предварительная запись.'
    },
    {
      city: 'Екатеринбург',
      address: 'ул. Мира, д. 5',
      phone: '+7 (343) 234-56-78',
      hours: 'Пн-Пт: 08:00 - 17:00, Сб: Выходной',
      additional: 'Вход с главного входа.'
    },
    {
      city: 'Новосибирск',
      address: 'ул. Красный проспект, д. 15',
      phone: '+7 (383) 678-90-12',
      hours: 'Пн-Пт: 09:00 - 18:00, Сб: 10:00 - 14:00',
      additional: 'На территории охраняемая зона.'
    },
  ];

  return (
    <div className="addresses" id='addresses'>
      <Container className="py-5">
        <h2 className="text-center">Адреса приема лома для физических лиц</h2>
        <Row>
          {addresses.map((addr, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <div className="address-card">
                <h5>{addr.city}</h5>
                <p><strong>Адрес:</strong> {addr.address}</p>
                <p><strong>Телефон:</strong> {addr.phone}</p>
                <p><strong>Часы работы:</strong> {addr.hours}</p>
                <p><strong>Дополнительно:</strong> {addr.additional}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Addresses;
