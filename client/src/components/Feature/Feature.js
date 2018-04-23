import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Thumbnail, Image } from 'react-bootstrap';
const rootUrl = 'http://localhost:5000/';

class Feature extends React.Component {

    render() {
        return (
            <div>
                <Col xs={12} sm={4} bsClass="clearfix" className="person-wrapper">
                    <Image src={rootUrl + this.props.product.productImage} circle className="profile-picture" />
                    <h3>
                        <Link target="_blank" className="product-header" to={rootUrl + this.props.product.productImage} href={rootUrl + this.props.product.productImage}>{this.props.product.name}
                        </Link> <label className="price"> ${this.props.product.price}</label>
                    </h3>
                    <p className="product-description">{this.props.product.description}</p>
                </Col>
            </div>
        )
    }
}

export default Feature;

