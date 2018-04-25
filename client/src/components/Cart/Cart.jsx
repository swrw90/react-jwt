import React from 'react';
import { Grid, Row, Col, PageHeader, Thumbnail, Image, Button, Form, Media } from 'react-bootstrap';

class Cart extends React.Component {
    render() {
        return (
            <Grid>
                <PageHeader>Cart Component</PageHeader>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Media>
                            <Media.Left>
                                <img width={64} height={64} src='assets/night-product-watch-dramatic-84475.jpeg' alt="thumbnail" />
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

                        <Media>
                            <Media.Left>
                                <img width={64} height={64} src='assets/night-product-watch-dramatic-84475.jpeg' alt="thumbnail" />
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

                        <Media>
                            <Media.Left>
                                <img width={64} height={64} src='assets/night-product-watch-dramatic-84475.jpeg' alt="thumbnail" />
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