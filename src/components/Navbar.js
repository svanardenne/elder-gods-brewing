import React from 'react';
import {
    Navbar, 
    Nav
  } from 'react-bootstrap';


const MainNav = () => {
    return(

        <Navbar className="bg-black text-white" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="#home">Elder Gods Brewing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#book">Reserve a tasting</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
    );
}

export default MainNav;