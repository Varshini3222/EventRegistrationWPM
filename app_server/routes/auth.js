const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const isAuthenticated = require('../controllers/eventController');

// Route for signup page
router.get('/signup', eventController.renderSignup);

// Route to handle user signup form submission
router.post('/signup', eventController.registerUser);

// Route for login page
router.get('/login', eventController.renderLogin);

// Route to handle user login form submission
router.post('/login', eventController.loginUser);

module.exports = router;
