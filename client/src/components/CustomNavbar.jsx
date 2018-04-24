import React from 'react';
import { Badge, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
                                          <Badge>1</Badge>              
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getProducts: () => dispatch(getProductsData()),
    };
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        loadingState: state.products.loadingState,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);