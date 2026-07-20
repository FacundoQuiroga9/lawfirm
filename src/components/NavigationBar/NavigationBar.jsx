import { Navbar, Nav, Container } from 'react-bootstrap';
import "./NavigationBar.css";
import { firm, navigationLinks } from '../../data/siteContent';
import TexasFlag from '/images/texas-flag.png';

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" aria-label={`${firm.name} home`}>
          <img
            src={firm.brandLogo}
            alt={firm.name}
            className="logotipo"
            width="749"
            height="365"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu'>
          <Nav className="navbar-nav-center">
            {navigationLinks.map((link) => (
              <Nav.Link key={link.href} href={link.href}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="navbar-actions">
            <Nav.Link className="number-button" href={firm.phoneHref}>
              {firm.phone}
            </Nav.Link>
            <img
              src={TexasFlag}
              alt="Texas"
              className="flag-icon"
              width="300"
              height="200"
              loading="lazy"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
