import React from 'react';
import { Col, Button, Thumbnail } from 'react-bootstrap';
import { dispatchProducts } from '../../redux/actions/product.actions';
import axios from 'axios';
import { connect } from 'react-redux';
import { getProductsData } from '../../redux/reducers/product.reducers';


class Product extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Thumbnail src="assets/glasses-fluke-angel-therapy-glasses-glass-golden-53156.jpeg" alt="242x200">
                        <h3>{this.props.products.products[0].name}</h3>
                        <p >A brief description about these super cool glasses. Wow, you should buy these!</p>
                        <p>
                            <Button bsSize="xs" bsStyle="success" name="add" onSubmit={this.props.handleSubmit}>Add Item</Button>&nbsp;
                                        <label className="price">${this.props.products.products[0].price}</label>
                        </p>
                    </Thumbnail>
                </Col>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProductsData()),
    };
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
