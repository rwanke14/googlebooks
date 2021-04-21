import React from "react";
import {Navbar, Nav} from "react-bootstrap"

const Navigation = () => {
  return (
    <div>
      
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Google Books</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Search</Nav.Link>
            <Nav.Link href="#features">Saved</Nav.Link>
          </Nav>
        </Navbar>

    </div>
  );
};

export default Navigation;
