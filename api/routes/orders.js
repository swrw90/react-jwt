const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');
const checkAuth = require('../auth/check-auth');

const OrdersController = require('../controllers/orders');

//handles GET requests to /orders 
router.get('/', checkAuth, OrdersController.orders_get_all);

//handles POST requests to /orders, returns created order
router.post('/', checkAuth, OrdersController.orders_create_order);

//handles GET requests for a specific order via orderId
router.get('/:orderId', checkAuth, OrdersController.orders_get_order);

//handles DELETE requests for a specific order via orderId
router.delete('/:orderId', checkAuth, OrdersController.orders_delete_order);

module.exports = router;