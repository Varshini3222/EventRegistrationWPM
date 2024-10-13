var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const eventRoutes = require('./app_server/routes/event'); // Import event routes

var indexRouter = require('./app_server/routes/index');  
var usersRouter = require('./app_server/routes/users');  
var authRouter = require('./app_server/routes/auth');   

var app = express();
 

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static('public'));
//app.use('/events', eventRoutes);

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');  

// mongoose.connect('mongodb+srv://22eg106b26:1234@eventcluster.4osji.mongodb.net/myDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log("Connected to MongoDB");
// }).catch((err) => {
//   console.error("Failed to connect to MongoDB", err);
// });

// Use the event routes
//app.use('/events', eventRoutes);
app.use('/', indexRouter); 
app.use('/users', usersRouter); 
app.use('/', authRouter);  
 
// app.get('/', (req, res) => {
//   res.render('add-event');  // This will render the add event page
// });

app.use(function (req, res, next) {
  next(createError(404)); 
});

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
