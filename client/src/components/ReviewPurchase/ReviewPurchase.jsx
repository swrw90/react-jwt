import React from "react";
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

class ReviewPurchase extends React.Component {
    componentWillMount() {
        console.log(this.props.cart.totalPrice)
    }
    render() {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Review Your Order</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Click "Buy" to finalize your purchase.</Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Buy</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        totalPrice: state.totalPrice
    }
}
export default connect(mapStateToProps)(ReviewPurchase);