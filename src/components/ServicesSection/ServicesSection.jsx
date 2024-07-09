import family from "/images/family-icon.png"
import civil from "/images/civil.png"
import handcuffs from "/images/handcuffs.png"
import { Container, Row, Col } from 'react-bootstrap';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section py-5">
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <h2 className="text-center services-title">Practice Areas</h2>
        <p className="text-center services-text">Expert Legal Solutions for Every Aspect of Your Life</p>
        <Row className="mt-5 w-100 justify-content-center">
          <Col md={4} lg={4} className="service-item">
          <Row className="d-flex flex-direction-row">
            <Col className="d-flex align-items-center">
            <img src={handcuffs} alt="" className="icon-png me-2" />
            <h3 className="legal-title">Criminal Law</h3>
            </Col>
          </Row>
          <ul className="list">
              <li>Probation Violations</li>
              <li>DWI/DUI</li>
              <li>Drug Crimes</li>
              <li>Felonies</li>
              <li>Weapon Offenses</li>
              <li>Expunctions and Record Sealing</li>
              <li>Theft and Property Crimes</li>
              <li>Sexual Offenses</li>
              <li>Violent Crimes</li>
            </ul>
          </Col>
          <Col md={4} lg={4} className="service-item">
          <Row className="d-flex flex-direction-row">
            <Col className="d-flex align-items-center">
            <img src={family} alt="" className="icon-png me-2" />
            <h3 className="legal-title">Family Law</h3>
            </Col>
          </Row>
          <ul className="list">
              <li>Divorce</li>
              <li>Child Custody and Visitation</li>
              <li>Child and Spousal Support</li>
              <li>Prenup Agreements</li>
              <li>Restraining Orders</li>
              <li>Adoption</li>
              <li>Wills, Trusts, Probate</li>
              <li>Restraining Orders</li>
            </ul>
          </Col>
          <Col md={4} lg={4} className="service-item middle">
          <Row className="d-flex flex-direction-row">
            <Col className="d-flex align-items-center">
            <img src={civil} alt="" className="icon-png me-2" />
            <h3 className="legal-title">Civil Law</h3>
            </Col>
          </Row>
          <ul className="list">
              <li>Contract Disputes</li>
              <li>Car Accidents</li>
              <li>Property Disputes</li>
              <li>Sexual Abuse</li>
              <li>Mediation</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
