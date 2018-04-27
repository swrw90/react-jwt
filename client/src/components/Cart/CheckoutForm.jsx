import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Row, Col, Button, Form } from 'react-bootstrap';
import './cart.css';

class CheckoutForm extends React.Component {


    render() {
        return (
            <div>
                <ul className="summary-list">
                    <li>{this.props.cart.cart[0].name}<label> ${this.props.cart.cart[0].price}</label></li>
                </ul>
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