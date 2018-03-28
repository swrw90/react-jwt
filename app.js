const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');


//all requests filter through morgan and a log is returned in the console
const morgan = require('morgan');
app.use(morgan('dev'));


//only requests starting with /*example* are handled by 2nd argument. 
//requests starting with /*example* are forwarded to the route file defined by 2nd argument.
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)


//returns error for requests not found by other routes and forwards the error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


//returns error for failed requests or errors coming from anywhere
app.use((error, req, res, next) => {
    error.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;