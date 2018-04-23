import React from 'react';
import { Col, Button, Thumbnail, Image } from 'react-bootstrap';
const rootUrl = 'http://localhost:5000/';

class Feature extends React.Component {

    render() {
        return (
            <div>
                <Col xs={12} sm={4} bsClass="clearfix" className="person-wrapper">
                    <Image src="assets/night-product-watch-dramatic-84475.jpeg" circle className="profile-picture" />
                    <h3>Classy Watch<label className="price">$500</label></h3>
                    <p className="product-description">Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                </Col>
            </div>
        )
    }
}

export default Feature;

