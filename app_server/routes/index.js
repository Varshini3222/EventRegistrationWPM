const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');
const authController = require('../controllers/auth'); // Import the authController

const { about } = require('../controllers/others'); // Check this path


// Define the route for the about page
router.get('/about', about);


// Route for the main event list with both university and Hyderabad events
router.get('/', eventsController.eventList);


// Route for university events
router.get('/university', eventsController.getUniversityEvents);

// Route for Hyderabad events
router.get('/hyderabad', eventsController.getHyderabadEvents);

// Route for detailed event info
router.get('/events/:eventName', eventsController.eventInfo);

// Route to add a review to an event
//router.get('/events/:eventName/review', eventController.addReview);
//router.post('/events/:eventName/review', eventController.submitReview);


// Route to attend an event (requires login)
router.post('/events/:eventName/attend', authController.isAuthenticated, eventsController.attendEvent); // Updated to POST

// Route for login page
router.get('/login', eventsController.renderLogin);

// Route for signup page
router.get('/signup', eventsController.renderSignup);

module.exports = router;
