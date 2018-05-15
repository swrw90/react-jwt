import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Row, Col, Button, Form } from 'react-bootstrap';
import './cart.css';

class CheckoutForm extends React.Component {

    displayAllCheckoutItems() {
        let cart = this.props.cart.cart;
        var checkoutCartItems = cart.map(function (cart) {
            return <li key={cart._id}>Qty: {cart.quantity} {cart.name} @ ${cart.price} </li>
        });
        return checkoutCartItems;
    }

    displayTotal(total) {
        console.log(this.props.totalPrice)
        let grandTotal = this.props.totalPrice
        return grandTotal
    }

    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Form >
                        <div className="form-container">
                            <h3 className="summary-header">Summary</h3>
                            <p>total: {this.displayTotal()}</p>
                            <div>
                                <ul className="summary-list">
                                    {this.displayAllCheckoutItems()}
                                </ul>

                            </div>
                        </div>
                    </Form>
                </Col>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(CheckoutForm);