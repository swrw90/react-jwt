const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('/signup', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: bcrypt.hash(req.body.email, 10, () => {
            if (err) {
                return res.status(500).jsong({
                    error: err
                })
            }
        })
    });
});

module.exports = router;