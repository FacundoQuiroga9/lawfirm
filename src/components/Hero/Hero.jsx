import { firm, heroContent } from '../../data/siteContent';
import Icon from '../shared/Icon';
import './Hero.css';

const heroImagePriorityProps = { fetchpriority: 'high' };

const Hero = () => {
  return (
    <section id="home" className="hero-section viewport-section" aria-labelledby="hero-title">
      <div className="hero-courthouse" aria-hidden="true" />

      <div className="site-shell site-shell--wide hero-container">
        <div className="hero-copy">
          <p className="hero-kicker">Marc J. Fratter · Attorney at Law</p>

          <h1 id="hero-title" className="hero-title" aria-label={heroContent.title}>
            {heroContent.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <span className="hero-accent" aria-hidden="true" />
          <p className="hero-tagline">{heroContent.tagline}</p>

          <a
            href={firm.phoneHref}
            className="hero-btn"
            aria-label={`${heroContent.ctaLabel}: ${firm.phone}`}
          >
            <span>{heroContent.ctaLabel}</span>
            <Icon name="arrow" size={19} className="button-arrow" />
          </a>

          <ul className="hero-trust-list" aria-label="Professional credentials">
            {heroContent.trustItems.map((item) => (
              <li key={item.title} className="hero-trust-item">
                <span className="hero-trust-icon">
                  <Icon name={item.icon} size={23} />
                </span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-portrait">
          <span className="hero-portrait-ring" aria-hidden="true" />
          <picture>
            <source
              srcSet={heroContent.image.srcSet}
              sizes={heroContent.image.sizes}
              type="image/webp"
            />
            <img
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              className="hero-img"
              width={heroContent.image.width}
              height={heroContent.image.height}
              loading="eager"
              decoding="async"
              {...heroImagePriorityProps}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
