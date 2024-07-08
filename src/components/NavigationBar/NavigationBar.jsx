import { Navbar, Nav, Container } from 'react-bootstrap';
import "./NavigationBar.css";
import TexasFlag from '/images/texas-flag.png'; // Asegúrate de que la ruta sea correcta

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home"><img src="./images/logotipo vertical.png" alt="" className='logotipo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu'>
          <Nav className="navbar-nav-center">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='number-button' href="tel:+12144713434">(214) 471-3434</Nav.Link>
              <img src={TexasFlag} alt="Texas Flag" className="flag-icon" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
