import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Well, Jumbotron, Grid, Row, Col, Image, Button, ButtonGroup } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Jumbotron className="home-banner">
                        <h1>Clothing Co.</h1>
                        <p className="home-banner-text">Summer is here and we have the best look for you... </p>
                    </Jumbotron>
                    <Row>
                        <Col xs={12} sm={8} smOffset={2}>
                            <Image src="assets/pexels-photo-322207.jpeg" className="about-profile-picture" rounded />
                            <h4>Quality in every thread</h4>
                            <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                            <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque.</p>
                            <hr />
                            <Row >
                                <Col justified >
                                    <Jumbotron > <h2>Checkout our summertime deals!</h2>
                                    </Jumbotron>
                                </Col>
                            </Row>
                            <div className="container-fluid"><ButtonGroup justified>
                                <Button bsSize="small" href="/login">Sign Up</Button>
                                <Button bsSize="small" href="/about">Learn More</Button>
                                <Button bsSize="small" href="/products">Shop Now</Button>
                            </ButtonGroup></div>
                            <hr />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;