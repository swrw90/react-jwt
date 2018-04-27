import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Grid, Row, Col, Jumbotron, PageHeader, Thumbnail, Image, Button, Form, Media } from 'react-bootstrap';
import './cart.css';

class CheckoutForm extends React.Component {
    render() {
console.log(this.props.cartItem.description)
        
        return (
            <div>
                <Col xs={6} md={4}>
                    <Form >
                        <div className="form-container">
                            <h3 className="summary-header">Summary</h3>
                            <Col xs={6} md={4}><h4 className="summary-header">Item</h4></Col>
                            <Col xs={6} md={4}><h4 className="summary-header">Price</h4></Col>
                            <Col xs={6} md={4}><h4 className="summary-header">Quantity</h4></Col>
                            
                            <ul className="summary-list">
                                <li><label> $</label> <span className="list-item-quantity"> x1</span></li>
                                <li>{this.props.cartItem.name}<label> ${this.props.cartItem.price}</label></li>
                            </ul>
                        </div>
                    </Form>
                </Col>
            </div>
        )
    }

}


export default CheckoutForm;