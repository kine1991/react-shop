import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Styles } from './header.styles';
 
const HeaderComponent: React.FunctionComponent = () => {
    return (
        <Styles>
            <Navbar className="navbar" bg="light" expand="sm">
            <Navbar.Brand href="#home">Shop Car</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/">Main</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Styles>  
    )
}

export default HeaderComponent;