const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const UserController = require('../controllers/user');
router.post('/signup', );


router.post('/login', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            // Checks if user count is less than one. If so fail.
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Authorization Failed.'
                });
            }
            console.log(user[0].password);
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                // Check for error
                if (err) {
                    return res.status(401).json({
                        message: 'Authorization Failed.'
                    });
                }

                
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: '1h'
                        }
                    ); console.log(token);
                    return res.status(200).json({
                        message: 'Authorization successful',
                        token: token
                    });
                }

                return res.status(401).json({
                    message: 'Authorization Failed.'
                });
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


router.delete('/:userId', (req, res, next) => {
    User.remove({ _id: req.params.userId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
})
module.exports = router;