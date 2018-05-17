import React from 'react';
import './Products.css';
import { Col, Button, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { add } from '../../redux/reducers/cart.reducer';
import { connect } from 'react-redux';
const rootUrl = 'http://localhost:5000/';

// This class represents a product on Products page.
// Prop: Product object is passed in from Products.jsx file.
// Product object:
//   - name
//   - price
//   - description
//   - imageURL
class Product extends React.Component {
    handleClick = (e) => {
        e.preventDefault(e);
        this.props.addToCart(this.props.product);
    }
    render() {

        return (
            <div>
                <Col xs={6} md={4}>
                    <Thumbnail src={rootUrl + this.props.product.productImage} alt="242x200" className="product-image" >
                        <h3>
                            <Link target="_blank" className="product-header" to={rootUrl + this.props.product.productImage} href={rootUrl + this.props.product.productImage}>{this.props.product.name}
                            </Link>
                        </h3>
                        <p>{this.props.product.description}</p>
                        <p>
                            <Button bsSize="xs" bsStyle="success" name="add" onClick={this.handleClick}>Add Item</Button>&nbsp;
                                        <label className="price">${this.props.product.price}</label>
                        </p>
                    </Thumbnail>
                </Col>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: cartItem => dispatch(add(cartItem)),
    };
};

export default connect(null, mapDispatchToProps)(Product);