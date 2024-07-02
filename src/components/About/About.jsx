import { Container } from 'react-bootstrap';
import './About.css';
import lawyer from '/images/Abogado2.png';

const AboutSection = () => {
  return (
    <Container>
      <section id="about" className="about-section d-flex align-items-center">
      <div className="about-image">
        <img src={lawyer} alt="Profile" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-grid-item">
            <h3>Education</h3>
            <p>Details about education go here.</p>
          </div>
          <div className="about-grid-item">
            <h3>Years of Experience</h3>
            <p>Details about years of experience go here.</p>
          </div>
          <div className="about-grid-item">
            <h3>Areas of Expertise</h3>
            <p>Details about areas of expertise go here.</p>
          </div>
          <div className="about-grid-item">
            <h3>Jurisdiction</h3>
            <p>Details about jurisdiction go here.</p>
          </div>
        </div>
      </div>
    </section>
    </Container>

  );
};

export default AboutSection;
