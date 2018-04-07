import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Some Header Text</h2>
                    <p>Additional text for filler etc etc...</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Grid>
        );
    }
}

export default Home;
