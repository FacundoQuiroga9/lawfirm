import Map from '../Map/Map';
import ContactLink from '../shared/ContactLink';
import Icon from '../shared/Icon';
import { firm } from '../../data/siteContent';
import './Contact.css';

const ContactItem = ({ icon, title, children }) => (
  <div className="contact-item">
    <span className="contact-item__icon">
      <Icon name={icon} size={21} />
    </span>
    <div className="contact-item__content">
      <h3>{title}</h3>
      {children}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section section-pad viewport-section"
      aria-labelledby="contact-title"
    >
      <div className="site-shell">
        <div className="contact-layout">
          <address className="contact-info">
            <p className="eyebrow">Free Personal</p>
            <h2 id="contact-title">Consultation</h2>
            <p className="contact-intro">{firm.attorneyName}, Attorney at Law</p>

            <div className="contact-details">
              <ContactItem icon="pin" title="Address">
                <p>{firm.address.label}</p>
              </ContactItem>

              <ContactItem icon="mail" title="Email">
                <p>
                  <ContactLink href={firm.emailHref}>{firm.email}</ContactLink>
                </p>
              </ContactItem>

              <ContactItem icon="phone" title="Phone">
                <p>
                  <ContactLink
                    href={firm.phoneHref}
                    ariaLabel={`Call ${firm.name} at ${firm.phone}`}
                  >
                    {firm.phone}
                  </ContactLink>
                </p>
              </ContactItem>

              <ContactItem icon="clock" title="Open Hours">
                {firm.hours.map((hours) => (
                  <p key={hours}>{hours}</p>
                ))}
              </ContactItem>
            </div>

            <a
              className="contact-call"
              href={firm.phoneHref}
              aria-label={`Call ${firm.phone}`}
            >
              <Icon name="phone" size={18} />
              <span>Call {firm.phone}</span>
            </a>
          </address>

          <div className="contact-map" aria-label={`${firm.name} office map`}>
            <div className="contact-map__label">
              <span>Office location</span>
              <strong>Plano, Texas</strong>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
