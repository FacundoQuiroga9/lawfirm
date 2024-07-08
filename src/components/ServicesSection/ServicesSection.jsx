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
        <p className="text-center services-text">Expert Legal Solutions for Every Aspect of Your Life</p>
        <Row className="mt-5 w-100 justify-content-center">
          <Col lg={4} className="service-item">
          <Row className="d-flex flex-direction-row">
            <Col className="d-flex align-items-center">
            <img src={handcuffs} alt="" className="icon-png me-2" />
            <h3 className="legal-title">Criminal Law</h3>
            </Col>
          </Row>
          <ul className="list">
              <li>Prosecution of individuals for acts classified as crimes.</li>
              <li>Handling of felonies such as murder and rape.</li>
              <li>Defense against misdemeanors like petty theft and vandalism.</li>
              <li>Expert legal advice and representation.</li>
              <li>Protection of rights at every stage of the legal process.</li>
            </ul>
          </Col>
          <Col lg={4} className="service-item middle">
          <Row className="d-flex flex-direction-row">
            <Col className="d-flex align-items-center">
            <img src={civil} alt="" className="icon-png me-2" />
            <h3 className="legal-title">Civil Law</h3>
            </Col>
          </Row>
          <ul className="list">
              <li>Resolution of disputes between individuals or organizations.</li>
              <li>Compensation for damages rather than criminal sanctions.</li>
              <li>Areas covered: contracts, property disputes, personal injury, family law, and more.</li>
              <li>Personalized and effective legal solutions.</li>
              <li>Efficient resolution of civil disputes.</li>
            </ul>
          </Col>
          <Col lg={4} className="service-item">
          <Row className="d-flex flex-direction-row">
            <Col className="d-flex align-items-center">
            <img src={family} alt="" className="icon-png me-2" />
            <h3 className="legal-title">Family Law</h3>
            </Col>
          </Row>
          <ul className="list">
              <li>Issues involving family relationships such as adoption, divorce, and child custody.</li>
              <li>Compassionate guidance through divorce proceedings.</li>
              <li>Child custody and support arrangements.</li>
              <li>Spousal support and alimony.</li>
              <li>Legal advice and representation for family matters.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
