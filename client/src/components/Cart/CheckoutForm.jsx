import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import ReviewPurchase from '../ReviewPurchase/ReviewPurchase';
import { Grid, Row, Col, Button, Form } from 'react-bootstrap';
import './cart.css';
import { checkout } from '../../redux/reducers/cart.reducer';

class CheckoutForm extends React.Component {

    displayAllCheckoutItems() {
        let cart = this.props.cart.cart;
        var checkoutCartItems = cart.map(function (cart) {
            return <li key={cart._id}>Qty: {cart.quantity} {cart.name} @ ${cart.price} </li>
        });
        return checkoutCartItems;
    }

    displayTotal(total) {
        let grandTotal = this.props.cart.totalPrice
        return grandTotal
    }

    handleCheckoutClick = (e) => {
        e.preventDefault(e);
        console.log("review called")
        this.props.checkoutClicked;
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
                            <Button bsSize="xs" onClick={this.handleCheckoutClick}>Checkout</Button>
                        </div>
                    </Form>
                </Col>
                {this.checkoutClicked === true && <ReviewPurchase/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        totalPrice: state.totalPrice,
        checkoutClicked: state.checkoutClicked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkoutClicked: () => dispatch(checkout())
    };
}

export default connect(mapStateToProps)(CheckoutForm);