const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');


//handles GET requests to /products 
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hanlding GET requests to /products'
    });
});

//handles POST requests to /products, returns created product
router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    product.save().then(result => {
        console.log(result);
    });
    res.status(201).json({
        message: 'Hanlding POST requests to /products',
        createdProduct: product
    });
});

//handles specific product via productId variable, assigns it to new const id via params
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'Special product id received'
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

//handles updating a specific product via id
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product updated'
    });
});

//handles deleting a specific product via id
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    });
});

module.exports = router;