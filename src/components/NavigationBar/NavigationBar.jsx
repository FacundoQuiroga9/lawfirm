import { Navbar, Nav, Container } from 'react-bootstrap';
import "./NavigationBar.css";
import TexasFlag from '/images/texas-flag.png';


const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home"><img src="./images/logotipo vertical.png" alt="" className='logotipo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#texas">
              <img src={TexasFlag} alt="Texas Flag" className="flag-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
