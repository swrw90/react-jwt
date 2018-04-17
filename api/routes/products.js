const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth');
const ProductsController = require('../controllers/products');


//multer parses bodies of form data. dest specifies a folder where multer will store incoming files
const multer = require('multer');

//configures the way multer will store the file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    //reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


//handles GET requests to /products 
router.get('/', ProductsController.products_get_all);

//handles POST requests to /products, returns created product
router.post('/', checkAuth, upload.single('productImage'), ProductsController.products_create_product);

//handles specific product via productId variable, assigns it to new const id via params
router.get('/:productId', ProductsController.products_get_product);

//handles updating a specific product via id
router.patch('/:productId', checkAuth, upload.single('productImage'), ProductsController.products_update_product);

//handles deleting a specific product via id
router.delete('/:productId', checkAuth, ProductsController.products_delete_product);

module.exports = router;