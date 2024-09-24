var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routers
var indexRouter = require('./app_server/routes/index'); // Main router with events
var usersRouter = require('./app_server/routes/users'); // Users router (optional)
var authRouter = require('./app_server/routes/auth');
var otherRouter = require('./app_server/routes/index');
// Express app setup
var app = express();

// Set up views directory and view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');  // Pug templating engine

// Middleware
app.use(logger('dev')); // Logs HTTP requests
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: false })); // Parses URL-encoded requests
app.use(cookieParser()); // Parses cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serves static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', indexRouter); // Main route for events and homepage
app.use('/users', usersRouter); // User-related routes (optional)
app.use('/', authRouter);  
app.use('/', otherRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404)); // Creates a 404 error if no route is matched
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error details in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = 'Error Page'; // Dynamically set error page title

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
