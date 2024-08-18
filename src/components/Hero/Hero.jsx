import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Hero.css'; 

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero" id='home'>
      <div className="hero-overlay">
        <Container className="pt-5">
          <Row className="align-items-center">
            <Col md={6} className="hero-text-col">
              <h2 className="company-name">{t('companyName')}</h2>
              <h1 dangerouslySetInnerHTML={{ __html: t('heroTitle') }} />
            </Col>
            <Col md={6} className="hero-carousel-col">
              <Carousel className="hero-carousel">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://avatars.mds.yandex.net/i?id=df226f2fd3bfbf75d0cf287bf9254363_l-5253513-images-thumbs&n=13"
                    alt="Slide 1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://avatars.mds.yandex.net/i?id=d420509ee9576e0792edbc4a03bfca0b_l-9224539-images-thumbs&n=13"
                    alt="Slide 2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://avatars.mds.yandex.net/i?id=691c0ba7f771ac95bf20198320501a83_l-12652282-images-thumbs&n=13"
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
              <p>{t('heroDescription')}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
