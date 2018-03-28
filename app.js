const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

mongoose.connect('localhost:27017', {
    useMongoClient: true
})


//all requests filter through morgan and a log is returned in the console
app.use(morgan('dev'));

//extracts json data and makes it easily readable
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//header1 gives access to server for any client via *
//header2 defines which headers are allowed
//checks if http method used on request is one of the OPTIONS allowed for request, browser sends this first
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
});

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
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;