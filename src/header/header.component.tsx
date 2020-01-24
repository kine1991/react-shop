import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Styles } from './header.styles';
import { Link } from 'react-router-dom';

import Image from 'react-bootstrap/Image';

const HeaderComponent = ({ currentUser, logout }) => {
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
            <Nav.Link as={Link} to="/">
              Main
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {currentUser ? (
              // <Nav.Link onClick={logout}>Logout</Nav.Link>
              <>
                <NavDropdown className="ml-3" title={currentUser.fullName} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/settings/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/settings/">Settings</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/settings/zzz">ZZZ</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="text-danger" onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="container-image">
                  <Image className="image" src={currentUser.imageUrl} roundedCircle />
                </div>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default HeaderComponent;
