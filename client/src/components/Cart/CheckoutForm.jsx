import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Row, Col, Button, Form } from 'react-bootstrap';
import './cart.css';

class CheckoutForm extends React.Component {

    displayAllCartItemsName() {
        console.log(this.props.cart.itemPrice)
        let cart = this.props.cart.cart;
        var checkoutCartItems = cart.map(function (cart) {
            return <li key={cart._id}>x{cart.quantity} {cart.name} ${cart.price} </li>
        });
        return checkoutCartItems;
    }

    // displayAllCartItemsPrice() {
    //     let cart = this.props.cart.cart;
    //     var checkoutCartItems = cart.map(function (cart) {
    //         return <li key={cart._id}>{cart.price}</li>
    //     });
    //     return checkoutCartItems;
    // }

    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Form >
                        <div className="form-container">
                            <h3 className="summary-header">Summary</h3>
                            <div>
                                <ul className="summary-list">
                                    {this.displayAllCartItemsName()}
                                </ul>

                            </div>
                            {/*<div>
                                <Col xs={6} md={4}></Col>
                                <ul>
                                    {this.displayAllCartItemsPrice()}
                                </ul>
                            </div>*/}
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