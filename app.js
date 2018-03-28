const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');

//only requests starting with /products are handled by 2nd argument. 
//requests starting with /products are forwarded to productRoutes file.
app.use('/products', productRoutes)

module.exports = app;