import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import { Grid, Row, Col, Jumbotron, PageHeader, Thumbnail, Image, Button, Form, Media } from 'react-bootstrap';
import './cart.css';

class Cart extends React.Component {

    displayCartItem() {
        let cart = this.props.cart;
        var cartItemComponent = cart.map(function (cart) {
            return  <CartItem key={cart._id} cartItem={cart} />
            
        });
        return cartItemComponent;
    }

    render() {
        console.log(this.props.cart)

        return (
            <Grid>
                <Jumbotron className="cart-banner">
                    <h1>Checkout</h1>
                    <p className="cart-banner-text">We value our customers</p>
                </Jumbotron>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        {this.displayCartItem()}
                    </Col>
                    <CheckoutForm/>
                </Row>
            </Grid>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps, {})(Cart);