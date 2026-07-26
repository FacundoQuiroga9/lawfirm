import { aboutContent, firm } from '../../data/siteContent';
import Icon from '../shared/Icon';
import './About.css';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="about-section viewport-section"
      aria-labelledby="about-title"
    >
      <div className="about-backdrop" aria-hidden="true" />
      <div className="site-shell site-shell--wide">
        <div className="about-layout">
          <div className="about-image">
            <span className="about-image-frame" aria-hidden="true" />
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
            <p className="eyebrow">{aboutContent.heading}</p>
            <h2 id="about-title">{firm.attorneyName}</h2>
            <div className="about-rule" aria-hidden="true" />
            <div className="about-copy">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a className="about-cta" href="#contact">
              <span>Contact Marc</span>
              <Icon name="arrow" size={18} className="button-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
