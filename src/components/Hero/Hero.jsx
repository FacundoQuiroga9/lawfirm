import './Hero.css';
import { firm, heroContent } from '../../data/siteContent';

const Hero = () => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-text-container">
          <h1 id="hero-title" className="hero-title" aria-label={heroContent.title}>
            {heroContent.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero-tagline">{heroContent.tagline}</p>
          <a href={firm.phoneHref} className="hero-btn">{heroContent.ctaLabel}</a>
        </div>
        <div className="hero-img-container">
          <picture>
            <source srcSet={heroContent.image.webp} type="image/webp" />
            <img
              src={heroContent.image.fallback}
              alt={heroContent.image.alt}
              className="hero-img"
              width={heroContent.image.width}
              height={heroContent.image.height}
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
