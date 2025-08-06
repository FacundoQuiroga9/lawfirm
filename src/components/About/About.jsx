import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import lawyer from '/images/mark1.png';

const AboutSection = () => {
  return (
    <Container className='pt-5'>
       <Row id="about" className="about-section d-flex align-items-center justify-content-center">
      <Col lg={6} className="about-image me-5">
        <img src={lawyer} className='about-img' alt="Profile" />
      </Col>
      <Col className="about-content py-5">
        <h2>About Me</h2>
        <p>
          Marc J. Fratter is one of Texas's preeminent criminal defense lawyers, renowed for his relentless dedication to his clients. Marc is a graduate of the Texas A&M School of Law and has been practicing civil law, criminal defense, and family law in the state of Texas for over 20 years.
        </p>
        <p>
        Marc's extensive experience has enabled him to handle a wide range of legal issues and provide his clients with expert legal advice and representation. He is licensed to practice law in the Texas, allowing him to assist clients throughout the state. Marc's areas of expertise include civil law, criminal defense, and family law, and he is dedicated to providing comprehensive legal services in these fields to ensure that his clients receive the best possible outcomes.
        </p>
      </Col>
    </Row>
    </Container>

  );
};

export default AboutSection;
