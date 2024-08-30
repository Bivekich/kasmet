import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Contacts.css';

const TELEGRAM_BOT_TOKEN = '7505684234:AAE2EQDf5zP2DKgEnZv9A4ie9MzW49UWxR0';
const TELEGRAM_CHAT_ID = '-1002176409931';

const Contacts = () => {
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const fullName = formData.get('fullName');
    const contactMethod = formData.get('contactMethod');
    const contactValue = formData.get('contactValue');
    const comment = formData.get('comment');

    const message = `Новая заявка на контакт:\nФИО: ${fullName}\nСпособ связи: ${contactMethod}\nКонтактные данные: ${contactValue}\nКомментарий: ${comment}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          }),
        },
      );

      if (response.ok) {
        alert('Сообщение успешно отправлено!');
      } else {
        alert('Ошибка отправки сообщения. Попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка отправки сообщения. Попробуйте еще раз.');
    }
  };

  return (
    <div className="contacts" id="contacts">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col xs={12} md={4} className="contact-info-container">
            <p className="contact-info">
              <strong>{t('phone_label')}:</strong> +7 (985) 756-25-95
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h2>КАСМЕТ</h2>
          </Col>
          <Col xs={12} md={4} className="contact-info-container">
            <p className="contact-info">
              <strong>{t('email_label')}:</strong> info@oookasmet.ru
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <h3 className="text-center mb-4">{t('contact_form_title')}</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFullName">
                <Form.Label>{t('full_name_label')}</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder={t('full_name_placeholder')}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formContactMethod" className="mt-3">
                <Form.Label>{t('contact_method_label')}</Form.Label>
                <Form.Check
                  type="radio"
                  label={t('contact_method_email')}
                  name="contactMethod"
                  value="email"
                  id="contactMethodEmail"
                  required
                />
                <Form.Check
                  type="radio"
                  label={t('contact_method_phone')}
                  name="contactMethod"
                  value="phone"
                  id="contactMethodPhone"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formContactValue" className="mt-3">
                <Form.Label>{t('contact_value_label')}</Form.Label>
                <Form.Control
                  type="text"
                  name="contactValue"
                  placeholder={t('contact_value_placeholder')}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formComment" className="mt-3">
                <Form.Label>Комментарий</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="comment"
                  placeholder="Введите ваш комментарий (опционально)"
                />
              </Form.Group>

              <Button className="button_send mt-4" type="submit">
                {t('submit_button')}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;
