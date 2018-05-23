import React from 'react';
import { Grid, Row, Col, Jumbotron, PageHeader, Thumbnail, Image, Button, Form, Media } from 'react-bootstrap';
import './cart.css';
import { connect } from 'react-redux';
import { del, reduceQuantity, incrementQuantity } from '../../redux/reducers/cart.reducer';
const rootUrl = 'http://localhost:5000/';

class CartItem extends React.Component {

    handleRemove(e) {
        e.preventDefault(e);
        this.props.removeItem(this.props.cartItem);
        console.log(this.props.cartItem);
    }

    handleQuantityDecrement(e) {
        e.preventDefault(e);
        this.props.decreaseQuantity(this.props.cartItem);
        if (this.props.cartItem.quantity === 0) {
            this.props.removeItem(this.props.cartItem);
        }
    }
    handleQuantityIncrease(e) {
        e.preventDefault(e);
        this.props.increaseQuantity(this.props.cartItem);
        this.props.cartItem.totalQuantity++
    }

    render() {
        return (
            <div className="item-container">
                <Media>
                    <Media.Left>
                        <img width={100} height={100} src={rootUrl + this.props.cartItem.productImage} alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <div>
                            <Media.Heading>{this.props.cartItem.name}</Media.Heading>
                        </div>
                        <div>
                            <p>{this.props.cartItem.description}</p>
                            <div className="item-button-container">
                                <Button bsSize="xsmall" onClick={this.handleRemove.bind(this)}>Remove</Button>
                                <Button bsSize="xsmall" onClick={this.handleQuantityDecrement.bind(this)}> - </Button>
                                <p>{this.props.cartItem.quantity}</p>
                                <Button bsSize="xsmall" onClick={this.handleQuantityIncrease.bind(this)}> + </Button>
                            </div>
                        </div>
                    </Media.Body>
                </Media>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (item) => dispatch(del(item)),
        decreaseQuantity: (item) => dispatch(reduceQuantity(item)),
        increaseQuantity: (item) => dispatch(incrementQuantity(item))
    };
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        quantity: state.quantity,
        totalQuantity: state.totalQuantity
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);