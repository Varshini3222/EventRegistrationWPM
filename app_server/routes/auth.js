<<<<<<< HEAD
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
=======
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
>>>>>>> e6c4061f6b4b65a70c97651b0b5914c6f7de8cfc
