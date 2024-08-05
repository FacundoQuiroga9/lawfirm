import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <div id='home' className="text-light">
      <Container className='hero'>
        <Row className="align-items-center hero">
          <Col md={6} className="text-md-start text-center hero-call">
            <h1 className='hero-title'>Your Legal Shield in Texas</h1>
            <p className='hero-text'>Tailored legal solutions for your unique case.</p>
            <div>
              <Button  className="me-2 btn-law px-4 py-3" href="tel:+12144713434">CALL ME</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img src="/images/mark2.png" alt="Lawyer" className="img-fluid hero-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
