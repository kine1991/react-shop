import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Styles } from './header.styles';
import { Link } from 'react-router-dom';

const HeaderComponent: React.FunctionComponent = () => {
  return (
    <Styles>
      <Navbar className="navbar" bg="light" expand="sm">
        <Navbar.Brand href="#home">Shop Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/">Main</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default HeaderComponent;
