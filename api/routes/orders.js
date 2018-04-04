const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');
const checkAuth = require('../auth/check-auth');

const OrdersController = require('../controllers/orders');

//handles GET requests to /orders 
router.get('/', OrdersController.orders_get_all);


//handles POST requests to /orders, returns created order
router.post('/', checkAuth, (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({
                    message: 'Product not found'
                });
            }
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                product: req.body.productId
            });
            return order.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Order stored',
                createdOrder: {
                    _id: result._id,
                    quantity: result.quantity
                },
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/orders/' + result._id
                }
            })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        message: 'Product not found',
                        error: err
                    });
                });
        })
});


//handles GET requests for a specific order via orderId
router.get('/:orderId', checkAuth, (req, res, next) => {
    Order.findById(req.params.orderId)
        .populate('product')
        .exec()
        .then(order => {
            if (!order) {
                return res.status(404).json({
                    message: 'Order not found'
                })
            }
            res.status(200).json({
                order: order,
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/orders'
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});


//handles DELETE requests for a specific order via orderId
router.delete('/:orderId', checkAuth, (req, res, next) => {
    Order.remove({ _id: req.params.orderId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Order deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:5000/orders',
                    body: { product: 'ID', quantity: 'Number' }
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
});



module.exports = router;