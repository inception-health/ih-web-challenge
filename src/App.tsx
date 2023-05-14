import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Search from "./Search/Search";
import CharacterDetails from "./CharacterDetails/CharacterDetails";
import "./index.css";

function App() {

  const [character, setCharacter] = useState({
    name: "",
    birthYear: "",
    height: "",
    weight: "",
    planet: ""
  })

  

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">StarWars Character Search</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content-container">
        <CharacterDetails className="character-details-section" value={character}/>
        <Search callback={setCharacter}/>
      </div>

      <footer className="bg-light py-3">
        <Container>
          <p className="text-muted">&copy; 2023 My App</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
