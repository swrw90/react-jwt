import React from "react";
import { connect } from 'react-redux';

class ReviewPurchase extends React.Component {
    componentWillMount() {
            console.log(this.props.cart.totalPrice)
    }
    render() {
        return (
            <div>
                <header>Review Purchase</header>
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