import React from "react";
import {Navbar, Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <div>
      
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Google Books</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link pathname="/search" href="/search">Search</Nav.Link>
            <Nav.Link pathname="/saved" href="/saved">Saved</Nav.Link>
          </Nav>
        </Navbar>

    </div>
  );
};

export default Navigation;
