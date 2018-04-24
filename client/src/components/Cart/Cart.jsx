import React from 'react';
import { PageHeader, Button } from 'react-bootstrap';

class Cart extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>Cart Component</PageHeader>
                <Button>Add/Remove</Button>
            </div> 
        )
    }
}

export default Cart;