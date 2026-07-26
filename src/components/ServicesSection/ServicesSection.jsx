import SectionHeader from '../shared/SectionHeader';
import { practiceAreas } from '../../data/siteContent';
import './ServicesSection.css';

const PracticeAreaCard = ({ area, index }) => (
  <article className="service-card">
    <span className="service-card__number" aria-hidden="true">
      {String(index + 1).padStart(2, '0')}
    </span>
    <div className="service-card__heading">
      <span className="service-card__icon-wrap">
        <img
          src={area.icon}
          alt={area.iconAlt}
          className="service-card__icon"
          width="100"
          height="100"
          loading="lazy"
        />
      </span>
      <h3>{area.title}</h3>
    </div>
    <ul className="service-card__list">
      {area.services.map((service) => (
        <li key={service}>{service}</li>
      ))}
    </ul>
  </article>
);

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="services-section section-pad viewport-section"
      aria-labelledby="services-title"
    >
      <div className="site-shell">
        <SectionHeader
          id="services-title"
          eyebrow="Practice Areas"
          title="Expert legal solutions for every aspect of your life."
        />
        <div className="services-grid" aria-labelledby="services-title">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
