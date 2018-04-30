import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Row, Col, Button, Form } from 'react-bootstrap';
import './cart.css';

class CheckoutForm extends React.Component {

    displayAllCartItemsName() {
        let cart = this.props.cart.cart;
        var checkoutCartItems = cart.map(function (cart) {
            return <li key={cart._id}>{cart.name}</li>
        });
        return checkoutCartItems;
    }

    displayAllCartItemsPrice() {
        let cart = this.props.cart.cart;
        var checkoutCartItems = cart.map(function (cart) {
            return <li key={cart._id}>{cart.price}</li>
        });
        return checkoutCartItems;
    }

    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Form >
                        <div className="form-container">
                            <h3 className="summary-header">Summary</h3>
                            <Col xs={6} md={4}><h4 className="summary-header">Item</h4></Col>
                            <Col xs={6} md={4}><h4 className="summary-header">Price</h4></Col>
                            <ul className="summary-list">
                                {this.displayAllCartItemsName ()}
                            </ul>

                            <ul>
                                {this.displayAllCartItemsPrice()}
                            </ul>
                        </div>
                    </Form>
                </Col>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CheckoutForm);