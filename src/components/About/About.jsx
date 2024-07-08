import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import lawyer from '/images/Abogado2.png';

const AboutSection = () => {
  return (
    <Container className='py-5'>
       <Row id="about" className="about-section d-flex align-items-center justify-content-center">
      <Col lg={6} className="about-image me-5">
        <img src={lawyer} className='about-img ' alt="Profile" />
      </Col>
      <Col className="about-content">
        <h2>About Me</h2>
        <p>
          I am Marc J. Fratter, a graduate of the Texas A&M School of Law. With 20 years of experience, I have been practicing civil law, criminal defense, and family law in the state of Texas.
        </p>
        <p>
        My extensive experience has enabled me to handle a wide range of legal issues and provide my clients with expert legal advice and representation. I am licensed to practice law in the state of Texas, covering various jurisdictions within Texas, allowing me to assist clients throughout the state. My areas of expertise include civil law, criminal defense, and family law, and I am dedicated to providing comprehensive legal services in these fields to ensure that my clients receive the best possible outcomes.
        </p>
      </Col>
    </Row>
    </Container>

  );
};

export default AboutSection;
