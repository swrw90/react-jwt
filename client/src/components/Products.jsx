import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Products.css';

class Products extends Component {
    render() {
        return (
            <div>

                <Grid>
                    <Jumbotron>
                        <h2>Some Header Text</h2>
                        <p>Additional text for filler etc etc...</p>
                        <Link to="/about">
                            <Button bsStyle="success">About</Button>
                        </Link>
                    </Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/night-product-watch-dramatic-84475.jpeg" circle className="profile-picture" />
                            <h3>Classy Watch</h3>
                            <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                            <label>$500</label>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/pexels-photo-947885.jpeg" circle className="profile-picture" />
                            <h3>Cool Shades</h3>
                            <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                            <label>$20</label>                            
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/pexels-photo-322674.jpeg" circle className="profile-picture" />
                            <h3>Stylish Bracelets</h3>
                            <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                            <label>$10</label>                                                        
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Products;

