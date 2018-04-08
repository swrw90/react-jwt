import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Image src="assets/adult-casual-clothes-296881.jpg" className="header-image" />
                <Grid>
                    <Row>
                        <Col xs={12} sm={8} smOffset={2}>
                            <Jumbotron > <h2>Checkout our summertime deals!</h2>
                                <Link to="/products">
                                    <Button bsStyle="success" bsSize="small">Learn More</Button>
                                </Link>
                            </Jumbotron>
                            <Image src="assets/pexels-photo-322207.jpeg" className="about-profile-picture" rounded />
                            <h4>Quality in every thread</h4>
                            <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                            <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;