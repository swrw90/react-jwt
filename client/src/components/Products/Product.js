import React from 'react';
import './Products.css';
import { Col, Button, Thumbnail, Image, Form, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { add, addItem } from '../../redux/reducers/product.reducers';
import { connect } from 'react-redux';
const rootUrl = 'http://localhost:5000/';



class Product extends React.Component {

    handleClick = (e) => {
        e.preventDefault(e);
        let cartItem = this.props
        this.props.addToCart(cartItem)
        
    }


    render() {
        return (

            <div>
                <Col xs={6} md={4}>
                    <Form>
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
                    </Form>
                </Col>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (cartItem) => dispatch(add(cartItem)),

    };
};


export default connect(null, mapDispatchToProps)(Product);

