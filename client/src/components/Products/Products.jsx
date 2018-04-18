import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, Thumbnail, Popover } from 'react-bootstrap';
import './Products.css';
import Product from './Product';
import { connect } from 'react-redux';
import { getProductsData, LoadingState } from '../../redux/reducers/product.reducers';

class Products extends Component {
    componentWillMount() {
        this.props.getProducts();
    }

    displayProductComponent() {
        switch (this.props.loadingState) {
            case LoadingState.pending:
                break;
            case LoadingState.loading:
                break;
            case LoadingState.finished:
                var productsComponent = this.props.products.products.map(function (product) {
                    return <Product key={product._id} product={product} />
                });

                return productsComponent;
        }
    }

    render() {
        return (
            <div>
                <Grid>
                    <Jumbotron className="products-banner">
                        <h1>Summertime Sales</h1>
                        <p className="products-banner-text">Summer is here and we have the best look for you... </p>
                    </Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} bsClass="clearfix" className="person-wrapper">
                            <Image src="assets/night-product-watch-dramatic-84475.jpeg" circle className="profile-picture" />
                            <h3>Classy Watch<label className="price">$500</label></h3>
                            <p className="product-description">Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                        </Col>
                        <Col xs={12} sm={4} bsClass="clearfix" className="person-wrapper">
                            <Image src="assets/pexels-photo-947885.jpeg" circle className="profile-picture" />
                            <h3>Cool Shades <label className="price">$20</label></h3>
                            <p className="product-description">Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>

                        </Col>
                        <Col xs={12} sm={4} bsClass="clearfix" className="person-wrapper">
                            <Image src="assets/pexels-photo-322674.jpeg" circle className="profile-picture" />
                            <h3>Stylish Bracelets<label className="price">$10</label></h3>
                            <div xs={12} sm={4} lg={12}>
                                <p className="product-description">Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                            </div>
                        </Col>

                    </Row>
                    <Popover
                        id="popover-basic"
                        placement="right"
                        positionLeft={750}
                        positionTop={1050}
                        title="On Sale!"
                    >
                        These cool shades are <strong>amazing!</strong>Classic design with a comfortable feel.
                    </Popover>
                    <Popover
                        id="popover-basic"
                        placement="left"
                        positionLeft={100}
                        positionTop={1500}
                        title="New Item!"
                    >
                        Each custom bracelete is <strong>handcrafted</strong> from organic material.
                    </Popover>
                    <hr />
                    <Grid>
                        <Row>
                            {this.displayProductComponent()}
                        </Row>
                        <hr />

                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProductsData()),
    };
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        loadingState: state.products.loadingState
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);