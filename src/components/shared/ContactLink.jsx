import './ContactLink.css';

const ContactLink = ({ href, children, className = '', ariaLabel }) => (
  <a className={`contact-link ${className}`.trim()} href={href} aria-label={ariaLabel}>
    {children}
  </a>
);

export default ContactLink;
