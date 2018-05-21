import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Row, Col, Button, Form } from 'react-bootstrap';
import './cart.css';
import { checkout } from '../../redux/reducers/cart.reducer';
import ReviewPurchase from '../ReviewPurchase/ReviewPurchase';


class CheckoutForm extends React.Component {

    handleCheckoutClick = (e) => {
        e.preventDefault(e);
       alert("Congratulations on your purchase")
    }
    displayAllCheckoutItems() {
        let cart = this.props.cart.cart;
        var checkoutCartItems = cart.map(function (product) {
            return <li key={product._id}>Qty: {product.quantity} {product.name} @ ${product.price} </li>
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
                            <p>total: {this.props.cart.totalPrice}</p>
                            <div>
                                <ul className="summary-list">
                                    {this.displayAllCheckoutItems()}
                                </ul>
                            </div>
                            <Button bsSize="xs" onClick={this.handleCheckoutClick}>Checkout</Button>
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
        totalPrice: state.totalPrice,
    }
}


export default connect(mapStateToProps)(CheckoutForm);