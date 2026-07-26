import { firm, navigationLinks } from '../../data/siteContent';
import Icon from '../shared/Icon';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-shell footer-main">
        <a className="footer-brand" href="#home" aria-label={`${firm.name} home`}>
          <span
            className="footer-logo brand-mark"
            aria-hidden="true"
            style={{ '--brand-logo-url': `url("${firm.brandLogo}")` }}
          />
        </a>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="footer-phone"
          href={firm.phoneHref}
          aria-label={`Call ${firm.attorneyName} at ${firm.phone}`}
        >
          <Icon name="phone" size={17} />
          <span>{firm.phone}</span>
        </a>
      </div>

      <div className="footer-legal">
        <div className="site-shell footer-legal__inner">
          <p>&copy; {currentYear} {firm.attorneyName}. All rights reserved.</p>
          <p>
            Website by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bondicode-link"
              href="https://bondicode.com/"
            >
              Bondicode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
