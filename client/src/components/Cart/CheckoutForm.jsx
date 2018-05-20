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
        this.props.updateCheckoutStatus();
    }
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
                {this.props.cart.checkoutClicked === true && <ReviewPurchase id="reviewPurchaseModal" />}

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
        updateCheckoutStatus: () => dispatch(checkout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);