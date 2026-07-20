import { Container } from 'react-bootstrap';
import { firm } from '../../data/siteContent';
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center footer">
      <Container>
        <p>
          &copy; {currentYear} {firm.attorneyName} - Developed by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="fq-link"
            href="https://www.quirogafacundo.com/"
          >
            FQ
          </a>
          .
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
