import { Container } from 'react-bootstrap';
import Map from '../Map/Map';
import ContactLink from '../shared/ContactLink';
import { contactContent, firm } from '../../data/siteContent';
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
      <Container>
        <div className="contact-layout">
          <address className="contact-info">
            <h2 id="contact-title">{contactContent.heading}</h2>

            <div className="contact-group">
              <h3>Address</h3>
              <p>{firm.address.label}</p>
            </div>

            <div className="contact-group">
              <h3>Contact</h3>
              <p>
                <ContactLink href={firm.emailHref}>{firm.email}</ContactLink>
              </p>
              <p>
                <ContactLink href={firm.phoneHref} ariaLabel={`Call ${firm.name} at ${firm.phone}`}>
                  {firm.phone}
                </ContactLink>
              </p>
            </div>

            <div className="contact-group">
              <h3>Open Hours</h3>
              {firm.hours.map((hours) => (
                <p key={hours}>{hours}</p>
              ))}
            </div>
          </address>
          <div className="contact-map" aria-label={`${firm.name} office map`}>
            <Map />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
