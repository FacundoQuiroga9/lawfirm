import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="py-4 text-center footer">
      <Container>

        <p>&copy; 2024 Marc J Fratter - Developed by <a target='_blanck' className='fq-link' href='https://www.quirogafacundo.com/'>FQ</a>.</p>
      </Container>
    </footer>
  );
};

export default Footer;
