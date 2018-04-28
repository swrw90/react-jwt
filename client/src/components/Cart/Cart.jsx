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
            return <CartItem key={cart._id} cartItem={cart} />

        });
        return cartItemComponent;
    }

    displayCheckoutForm() {
        let cart = this.props.cart;
        var checkoutFormComponent = cart.map(function (cart) {
            return <CheckoutForm key={cart._id} cartItem={cart} />
        });
        return checkoutFormComponent;
    }

    render() {
        console.log(this.props.cart.length)

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
                    {this.props.cart.length === 0 && <div className="empty-cart-container"><h4>Not much here...</h4> <Button bsSize="xsmall" href="/products">Continue Shopping</Button></div>}
                    {this.props.cart.length > 0 && <div>
                        <Col xs={6} md={4}>
                            <Form >
                                <div className="form-container">
                                    <h3 className="summary-header">Summary</h3>
                                    <Col xs={6} md={4}><h4 className="summary-header">Item</h4></Col>
                                    <Col xs={6} md={4}><h4 className="summary-header">Price</h4></Col>
                                    {this.displayCheckoutForm()}
                                </div>
                            </Form>
                        </Col>
                    </div>
                    }
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