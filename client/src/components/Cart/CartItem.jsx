import React from 'react';
import { Grid, Row, Col, Jumbotron, PageHeader, Thumbnail, Image, Button, Form, Media } from 'react-bootstrap';
import './cart.css';
import { connect } from 'react-redux';
import { del } from '../../redux/reducers/cart.reducer';
const rootUrl = 'http://localhost:5000/';

class CartItem extends React.Component {

    handleRemove(e) {
        e.preventDefault(e);
        this.props.removeItem(this.props.cartItem);
        console.log(this.props.cartItem);
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
                            <div>
                                <Button bsSize="xsmall" onClick={this.handleRemove.bind(this)}>Remove</Button>
                                <Button bsSize="xsmall"> - </Button>
                                <p>{this.props.cartItem.quantity}</p>
                                <Button bsSize="xsmall"> + </Button>
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
        removeItem: (item) => dispatch(del(item))
    };
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        quantity: state.quantity
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);