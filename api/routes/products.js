const express = require('express');
const router = express.Router();

//handles GET requests to /products 
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hanlding GET requests to /products'
    });
});

//handles POST requests to /products 
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Hanlding POST requests to /products',
        id: id
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