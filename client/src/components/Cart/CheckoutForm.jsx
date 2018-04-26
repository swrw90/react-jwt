import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Row, Col, Jumbotron, PageHeader, Thumbnail, Image, Button, Form, Media } from 'react-bootstrap';
import './cart.css';

class CheckoutForm extends React.Component {
        componentWillReceiveProps(nextProps) {
        console.log("Component is receiving proooops");
        console.log(nextProps.cart.cart.length);
    }

    render() {
console.log(this.props.cart.name)
        
        return (
            <div>
                <Col xs={6} md={4}>
                    <Form >
                        <div className="form-container">
                            <h3 className="summary-header">Summary</h3>
                            <Col xs={6} md={6}><h4 className="summary-header">Item</h4></Col>
                            <Col xs={6} md={6}><h4 className="summary-header">Quantity</h4></Col>
                            <ul className="summary-list">
                                <li><label> $</label> <span className="list-item-quantity"> x1</span></li>
                                <li>Cart Item <label> $500</label></li>
                                <li>Cart Item <label> $500</label></li>
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
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(CheckoutForm);