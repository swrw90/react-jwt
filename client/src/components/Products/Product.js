import React from 'react';
import { Col, Button, Thumbnail } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';

class Product extends React.Component {
    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Thumbnail src={"http://localhost:5000/uploads/2018-04-10T02:59:17.880Zdog-people.jpg"} alt="242x200">
                        <h3>{this.props.product.name}</h3>
                        <p >A brief description about these super cool glasses. Wow, you should buy these!</p>
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

