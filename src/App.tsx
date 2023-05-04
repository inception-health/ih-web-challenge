import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SWAPI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-3">
        <h1>Hello, World!</h1>
      </Container>

      <footer className="bg-light py-3">
        <Container>
          <p className="text-muted">&copy; 2023 My App</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
