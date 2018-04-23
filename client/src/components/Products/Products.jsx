import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Popover } from 'react-bootstrap';
import './Products.css';
import Product from './Product';
import Feature from '../Feature/Feature';
import { connect } from 'react-redux';
import { getProductsData, LoadingState, add } from '../../redux/reducers/product.reducers';

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

    displayFeatureComponent() {
        switch (this.props.loadingState) {
            case LoadingState.pending:
                break;
            case LoadingState.loading:
                break;
            case LoadingState.finished:
                var featureComponent = this.props.products.products.map(function (product) {
                    return <Feature key={product._id} product={product} />
                });
                return featureComponent.splice([0], 3);
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
                        {this.displayFeatureComponent()}
                    </Row>
                    <Popover
                        id="popover-basic"
                        placement="right"
                        positionLeft={750}
                        positionTop={1000}
                        title="On Sale!"
                    >
                        These cool shades are <strong>amazing!</strong>Classic design with a comfortable feel.
                    </Popover>
                    <Popover
                        id="popover-basic"
                        placement="left"
                        positionLeft={50}
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
        addToCart: () => dispatch(add())

    };
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        loadingState: state.products.loadingState,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);