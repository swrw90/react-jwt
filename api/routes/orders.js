const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');

//handles GET requests to /orders 
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});


//handles POST requests to /orders, returns created order
router.post('/', (req, res, next) => {
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    });
    order
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
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