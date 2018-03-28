const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

const morgan = require('morgan');
app.use(morgan('dev'));


//only requests starting with /*example* are handled by 2nd argument. 
//requests starting with /*example* are forwarded to the route file defined by 2nd argument.
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)


module.exports = app;