
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
  
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
  let users = []; // This is just an example. In a real app, you'd store users in a database.

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

  // Registration logic: Store the user data in memory or a database
  const user = { username, email, password }; // Only for demonstration, store users securely (hashed passwords)
  users.push(user);

  // After registration, redirect to login with success message
  res.render('login', {
    title: 'Login',
    pageHeader: { title: 'Login to Continue' },
    sidebar: 'Registration successful! Please log in to continue.',
  });
};
// Handle user login
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = users.find((u) => u.email === email);

  // Check if user exists and the password matches
  if (user && user.password === password) {
    // Successful login, redirect to home or events page
    res.redirect('/');
  } else {
    // Authentication failed, render login page with error message
    res.render('login', {
      title: 'Login',
      pageHeader: { title: 'Login to Continue' },
      sidebar: 'Incorrect email or password. Please try again.',
      showForgotPassword: true, // Render forgot password link
    });
  }
};

  module.exports = {
    isAuthenticated,
    renderLogin,
    renderSignup,
    registerUser,
    loginUser,
  };

  