const express = require('express');
const app = express();

//confirms response was received via res status 200
app.use((req, res, next) => {
    res.status(200).json({
        message: 'Success'
    });
})

module.exports = app;