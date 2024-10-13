const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');
const authController = require('../controllers/eventController'); 

const { about } = require('../controllers/others'); 
router.get('/about', about);
router.get('/', eventsController.eventList);
router.get('/university', eventsController.getUniversityEvents);
router.get('/hyderabad', eventsController.getHyderabadEvents);
router.get('/events/:eventName', eventsController.eventInfo);
router.get('/signup', authController.renderSignup);
router.post('/signup', authController.registerUser);
router.get('/login', authController.renderLogin);
router.post('/login', authController.loginUser);

module.exports = router;
