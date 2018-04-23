import React from 'react';
import './Products.css';
import { Col, Button, Thumbnail, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const rootUrl = 'http://localhost:5000/';


class Product extends React.Component {

    constructor(props) {
        super(props);

    }
    handleSubmit = (e) => {
        console.log("called");
        e.preventDefault(e);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({
            productCounter: + 1,
            cartItem: this.props.product._id
        });
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
                            <Button bsSize="xs" bsStyle="success" name="add" onSubmit={this.props.handleSubmit}>Add Item</Button>&nbsp;
                                        <label className="price">${this.props.product.price}</label>
                        </p>
                    </Thumbnail>
                </Col>
            </div>
        )
    }
}

export default Product;

