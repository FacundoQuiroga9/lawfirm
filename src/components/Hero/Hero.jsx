import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css'; // Aquí puedes agregar estilos personalizados si es necesario

const Hero = () => {
  return (
    <div className="hero text-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            <h1 className='hero-title'>You Deserve Fair Trial</h1>
            <p className='hero-text'>Get free legal advice from our experienced lawyers</p>
            <div>
              <Button variant="primary" className="me-2 btn-law px-4 py-3">CALL US</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img src="/images/abogado.png" alt="Lawyer" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
