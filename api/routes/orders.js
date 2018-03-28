const express = require('express');
const router = express.Router();

//handles GET requests to /orders 
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});


//handles POST requests to /orders, returns created order
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});


//handles GET requests for a specific order via orderId
router.get('/:orderId', (req, res, next) => {
    rest.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});


//handles DELETE requests for a specific order via orderId
router.delete('/:orderId', (req, res, next) => {
    rest.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});



module.exports = router;