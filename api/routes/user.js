const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../auth/check-auth');

//Creates a new user
router.post('/signup', UserController.user_signup);

//Authenticate and login a user
router.post('/login', UserController.user_login);

//Deletes a user
router.delete('/:userId', checkAuth, UserController.user_delete);

module.exports = router;