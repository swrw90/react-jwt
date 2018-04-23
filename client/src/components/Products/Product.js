import React from 'react';
import './Products.css';
import { Col, Button, Thumbnail, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoadingState} from '../../redux/reducers/product.reducers';
const rootUrl = 'http://localhost:5000/';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productCounter: 0,
            cartItems: [],
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        let cartItem = this.props.product;
        let cartItems = [];
        e.preventDefault(e);
        let count = 0;
        console.log(this.props);
        this.setState({
            productCounter: count++,
            cartItems: cartItems.push(cartItem),
        });
    }
    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Form>
                        <Thumbnail src={rootUrl + this.props.product.productImage} alt="242x200" className="product-image" >
                            <h3>
                                <Link target="_blank" className="product-header" to={rootUrl + this.props.product.productImage} href={rootUrl + this.props.product.productImage}>{this.props.product.name}
                                </Link>
                            </h3>
                            <p>{this.props.product.description}</p>
                            <p>
                                <Button bsSize="xs" bsStyle="success" name="add"  onClick={this.handleClick}>Add Item</Button>&nbsp;
                                        <label className="price">${this.props.product.price}</label>
                            </p>
                        </Thumbnail>
                    </Form>
                </Col>
            </div>
        )
    }
}

export default Product;

