import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center">About Us</h2>
        <Row>
          <Col>
            <p>About us details go here...</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
