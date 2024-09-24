// // In a new file, app_server/middleware/auth.js
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
  
  //module.exports = isAuthenticated;
  
  // Render login page
const renderLogin = (req, res) => {
    res.render('login', {
      title: 'Login',
      pageHeader: { title: 'Login to Continue' },
      sidebar: 'Already have an account? Log in to access and attend the events of your choice!',
    });
  };
  
  // Render signup page
  const renderSignup = (req, res) => {
    res.render('signup', {
      title: 'Sign Up',
      pageHeader: { title: 'Create an Account' },
      sidebar: 'Join us today! Create an account to explore and register for exciting events in your area.',
    });
  };
  
  // Handle user signup
  const registerUser = (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
  
    if (password !== confirmPassword) {
      return res.render('signup', {
        title: 'Sign Up',
        pageHeader: { title: 'Create an Account' },
        sidebar: 'Passwords do not match. Please try again.',
      });
    }
  
    // Registration logic, like storing user data in the database, goes here.
    // Redirect to login after successful registration.
    res.redirect('/login');
  };
  
  // Handle user login
  const loginUser = (req, res) => {
    const { email, password } = req.body;
  
    // Authentication logic (check user credentials in the database) goes here.
  
    // If successful, redirect to home or events page.
    res.redirect('/');
  };
  
  module.exports = {
    isAuthenticated,
    renderLogin,
    renderSignup,
    registerUser,
    loginUser,
  };
  