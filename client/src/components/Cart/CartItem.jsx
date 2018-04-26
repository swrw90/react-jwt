import React from 'react';
import { Grid, Row, Col, Jumbotron, PageHeader, Thumbnail, Image, Button, Form, Media } from 'react-bootstrap';
import './cart.css';
const rootUrl = 'http://localhost:5000/'

class CartItem extends React.Component {
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
                                <Button bsSize="xsmall">Remove</Button>
                                <Button bsSize="xsmall">Edit</Button>
                            </div>
                        </div>
                    </Media.Body>
                </Media>
            </div>
        )
    }


}
export default CartItem;