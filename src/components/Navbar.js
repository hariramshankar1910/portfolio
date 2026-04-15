import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" bg="light" variant="light" fixed="top" className="portfolio-navbar shadow-sm">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold">
          Hariram Shankar G
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="portfolio-navbar-nav" />
        <BootstrapNavbar.Collapse id="portfolio-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;

