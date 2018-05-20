import React from "react";
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';


class ReviewPurchase extends React.Component {
    componentWillMount() {
        console.log(this.props.cart.totalPrice)
    }

    closeModal() {
        //change state isHidden 
        this.setState({
            checkoutClicked: false + console.log(this.props.cart.checkoutClicked)
        })
        console.log(this.props.cart.checkoutClicked)
    }

    buy() {
        alert("Congratulations on your purchase!")
    }
    render() {
        return (
            <div className="static-modal" id="reviewPurchaseModal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Review Your Order</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Click "Buy" to finalize your purchase.</Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeModal.bind(this)}>Close</Button>
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
        totalPrice: state.totalPrice,
        checkoutClicked: state.checkoutClicked
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         updateCheckoutStatus: () => dispatch(checkout())
//     };
// }


export default connect(mapStateToProps)(ReviewPurchase);