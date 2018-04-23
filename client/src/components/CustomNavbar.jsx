import React from 'react';
import { Badge, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends React.Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Clothing Co.</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem>
                            <Link to="/cart">
                                <Badge>1</Badge>
                            </Link>
                        </NavItem>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                            </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                            About
                            </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/products" to="/products">
                            Products
                            </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="./login" to="/login">
                            Login
                            </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default CustomNavbar;