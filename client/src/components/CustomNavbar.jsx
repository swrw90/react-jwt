import React from 'react';
import { Badge, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './CustomNavbar.css';

class CustomNavbar extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log("Component is receiving daaaaawg");
        console.log(nextProps.cart.cart.length);
    }

    render() {
        return (
            <Navbar default collapseOnSelect className="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Clothing Co.</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
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
                        <NavItem eventKey={4} componentClass={Link} href="/cart" to="/cart">
                            <Badge>{this.props.cart.cart.length + this.props.cart.quantity}</Badge>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(CustomNavbar);