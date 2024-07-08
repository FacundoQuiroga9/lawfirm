import { Container, Row, Col } from 'react-bootstrap';
import Map from '../Map/Map';
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col lg={7} className="text-center text-md-start contact-info p-5">
            <h2>Get a Personal Consultation</h2>
            <h5><strong>Address</strong></h5>
            <p>101 E Park Blvd Suite 355, Plano, TX 75074</p>
            <h5><strong>Contact</strong></h5>
            <p>info@company.com</p>
            <p>(214) 471-3434</p>
            <h5><strong>Open Hours</strong></h5>
            <p>Monday-Saturday 8 am – 6 pm</p>
            <p>Sunday 11 am – 4 pm</p>
          </Col>
          <Col lg={5} className="mt-3 mt-md-0" >
            <Map />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
