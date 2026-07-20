import { Container } from 'react-bootstrap';
import SectionHeader from '../shared/SectionHeader';
import { practiceAreas } from '../../data/siteContent';
import './ServicesSection.css';

const PracticeAreaCard = ({ area }) => (
  <article className="service-card">
    <div className="service-card__heading">
      <img src={area.icon} alt={area.iconAlt} className="service-card__icon" width="100" height="100" loading="lazy" />
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
    <section id="services" className="services-section section-pad" aria-labelledby="services-title">
      <Container>
        <SectionHeader
          id="services-title"
          title="Practice Areas"
          subtitle="Expert legal solutions for every aspect of your life."
        />
        <div className="services-grid" aria-labelledby="services-title">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.title} area={area} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
