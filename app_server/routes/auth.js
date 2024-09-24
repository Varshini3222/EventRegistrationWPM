const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Route for signup page
router.get('/signup', authController.renderSignup);

// Route to handle user signup form submission
router.post('/signup', authController.registerUser);

// Route for login page
router.get('/login', authController.renderLogin);

// Route to handle user login form submission
router.post('/login', authController.loginUser);

module.exports = router;
