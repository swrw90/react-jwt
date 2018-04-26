import React from 'react';
import { Grid, Row, Col, Jumbotron, PageHeader, Thumbnail, Image, Button, Form, Media } from 'react-bootstrap';
import './cart.css';

class Cart extends React.Component {
    render() {
        return (
            <Grid>
                <Jumbotron className="cart-banner">
                    <h1>Checkout</h1>
                    <p className="cart-banner-text">We value our customers</p>
                </Jumbotron>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <div className="item-container">
                            <Media>
                                <Media.Left>
                                    <img width={100} height={100} src='assets/night-product-watch-dramatic-84475.jpeg' alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                    <div>
                                        <Media.Heading>Classy Watch</Media.Heading>
                                    </div>
                                    <div>
                                        <p>Some content about content in the content you purchased content. This items is an item in the cart of items that you may purchase.</p>
                                        <div>
                                            <Button bsSize="xsmall">Remove</Button>
                                            <Button bsSize="xsmall">Edit</Button>
                                        </div>
                                    </div>
                                </Media.Body>
                            </Media>
                        </div>

                        <div className="item-container">
                            <Media>
                                <Media.Left>
                                    <img width={100} height={100} src='assets/night-product-watch-dramatic-84475.jpeg' alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                    <div>
                                        <Media.Heading>Classy Watch</Media.Heading>
                                    </div>
                                    <div>
                                        <p>Some content about content in the content you purchased content.</p>
                                        <div>
                                            <Button bsSize="xsmall">Remove</Button>
                                            <Button bsSize="xsmall">Edit</Button>
                                        </div>
                                    </div>
                                </Media.Body>
                            </Media>
                        </div>

                        <div className="item-container">
                            <Media>
                                <Media.Left>
                                    <img width={100} height={100} src='assets/night-product-watch-dramatic-84475.jpeg' alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                    <div>
                                        <Media.Heading>Classy Watch</Media.Heading>
                                    </div>
                                    <div>
                                        <p>Some content about content in the content you purchased content.</p>
                                        <div>
                                            <Button bsSize="xsmall">Remove</Button>
                                            <Button bsSize="xsmall">Edit</Button>
                                        </div>
                                    </div>
                                </Media.Body>
                            </Media>
                        </div>
                    </Col>



                    <Col xs={6} md={4}>
                        <Form>
                            <h4>Summary</h4>
                            <ul>
                                <li>Cart Item <label> $500</label></li>
                                <li>Cart Item <label> $500</label></li>
                                <li>Cart Item <label> $500</label></li>
                            </ul>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Cart;