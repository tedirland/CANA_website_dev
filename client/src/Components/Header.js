import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './canaImg.png';

export default function Header() {
  return (
    <>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              width="200"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/map">Map of Historic District</Nav.Link>
            <Nav.Link href="/members">Members' Area</Nav.Link>
            <Nav.Link href="/business-directory">Business Directory</Nav.Link>
            <Nav.Link href="/history">History of CANA</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
