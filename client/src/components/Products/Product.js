import React from 'react';
import { Col, Image, Button, Thumbnail } from 'react-bootstrap';
import axios from 'axios';



class Product extends React.Component {
    constructor(props) {
        super(props);
        axios.get('http://localhost:5000/products')
            .then(function (response) {
                var productsData = response.data;
                console.log(productsData);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Thumbnail src="assets/glasses-fluke-angel-therapy-glasses-glass-golden-53156.jpeg" alt="242x200">
                        <h3 ></h3>
                        <p >A brief description about these super cool glasses. Wow, you should buy these!</p>
                        <p>
                            <Button bsSize="xs" bsStyle="success" onSubmit={this.props.handleSubmit}>Add Item</Button>&nbsp;
                                        <label className="price">$140</label>
                        </p>
                    </Thumbnail>
                </Col>
            </div>
        )

    }
}

export default Product;