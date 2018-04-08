import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Thumbnail } from 'react-bootstrap';
import './Products.css';

class Products extends Component {
    render() {
        return (
            <div>

                <Grid>
                    <Jumbotron>
                        <h1>Summertime Sales</h1>
                        <p>Summer is here and we have the best look for you... </p>

                    </Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} bsClass="clearfix" className="person-wrapper">
                            <Image src="assets/night-product-watch-dramatic-84475.jpeg" circle className="profile-picture" />
                            <h3>Classy Watch<label className="price">$500</label></h3>
                            <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                        </Col>
                        <Col xs={12} sm={4} bsClass="clearfix" className="person-wrapper">
                            <Image src="assets/pexels-photo-947885.jpeg" circle className="profile-picture" />
                            <h3>Cool Shades <label className="price">$20</label></h3>
                            <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                        </Col>
                        <Col xs={12} sm={4} bsClass="clearfix" className="person-wrapper">
                            <Image src="assets/pexels-photo-322674.jpeg" circle className="profile-picture" />
                            <h3>Stylish Bracelets<label className="price">$10</label></h3>
                            <div xs={12} sm={4} lg={12}>
                                <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                            </div>
                        </Col>
                    </Row>
                    <Grid>
                        <Row>
                            <Col xs={6} md={4}>
                                <Thumbnail src="assets/pexels-photo-290043.jpeg" alt="242x200">
                                    <h3>Bay-Ran</h3>
                                    <p>A brief description about these super cool glasses. Wow, you should buy these!</p>
                                    <p>
                                        <Button bsSize="xs" bsStyle="success">Add Item</Button>&nbsp;
                                    </p>
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4}>
                                <Thumbnail src="assets/pexels-photo-185769.jpeg" alt="242x200">
                                    <h3>Broakley</h3>
                                    <p>A brief description about these super cool glasses. Wow, you should buy these!</p>
                                    <p>
                                        <Button bsSize="xs" bsStyle="success">Add Item</Button>&nbsp;
                                    </p>
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4}>
                                <Thumbnail src="assets/glasses-fluke-angel-therapy-glasses-glass-golden-53156.jpeg" alt="242x200">
                                    <h3>Parby Warker</h3>
                                    <p>A brief description about these super cool glasses. Wow, you should buy these!</p>
                                    <p>
                                        <Button bsSize="xs" bsStyle="success">Add Item</Button>&nbsp;
                                    </p>
                                </Thumbnail>
                            </Col>
                        </Row>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Products;

