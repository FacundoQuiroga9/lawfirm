import { Container } from 'react-bootstrap';
import { aboutContent } from '../../data/siteContent';
import './About.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section section-pad" aria-labelledby="about-title">
      <Container>
        <div className="about-layout">
          <div className="about-image">
            <picture>
              <source srcSet={aboutContent.image.webp} type="image/webp" />
              <img
                src={aboutContent.image.fallback}
                className="about-img"
                alt={aboutContent.image.alt}
                width={aboutContent.image.width}
                height={aboutContent.image.height}
                loading="lazy"
              />
            </picture>
          </div>
          <div className="about-content">
            <h2 id="about-title">{aboutContent.heading}</h2>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
