import React from 'react';
import { Col, Button, Thumbnail } from 'react-bootstrap';
const rootUrl = 'http://localhost:5000/';

class Product extends React.Component {
    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Thumbnail src={rootUrl + this.props.product.productImage} alt="242x200">
                        <h3>{this.props.product.name}</h3>
                        <p >{this.props.product.description}</p>
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

