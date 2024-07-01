import family from "/images/family-icon.png"
import civil from "/images/civil.png"
import handcuffs from "/images/handcuffs.png"
import { Container, Row, Col } from 'react-bootstrap';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section py-5">
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <h2 className="text-center services-title">Legal Practice Areas</h2>
        <p className="text-center services-text mb-5">Service details go here...</p>
        <Row className="mt-5 w-100 justify-content-center">
          <Col md={4} className="service-item">
          <Row>
            <Col md={2}>
            <img src={handcuffs} alt="" className="icon-png" />
              </Col>
            <Col>
              <h3>Criminal Law</h3>
            </Col>
          </Row>
            <p className="mt-4">
              Description for Criminal Law services goes here. It provides
              details about the services offered in this area.
            </p>
          </Col>
          <Col md={4} className="service-item middle">
          <Row>
            <Col md={2}>
            <img src={civil} alt="" className="icon-png" />
            </Col>
            <Col>
              <h3>Civil Law</h3>
            </Col>
          </Row>
            <p className="mt-4">
              Description for Civil Law services goes here. It provides details
              about the services offered in this area.
            </p>
          </Col>
          <Col md={4} className="service-item">
          <Row>
            <Col md={2}>
              <img src={family} alt="" className="icon-png" />
            </Col>
            <Col>
              <h3 className="legal-title mb-5">Family Law</h3>
            </Col>

          </Row>

            <p className="mt-4">
              Description for Family Law services goes here. It provides details
              about the services offered in this area.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
