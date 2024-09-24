const universityEvents = [
  {
    name: "University Tech Conference",
    date: "2024-10-10",
    location: "University of Hyderabad",
    type: "University",
    description: "A conference on the latest in technology.",
    facilities: ["Wi-Fi", "Lunch Provided", "Parking"],
  },
  {
    name: "Science Fair",
    date: "2024-09-30",
    location: "Osmania University",
    type: "University",
    description: "Showcasing innovative projects from students.",
    facilities: ["Exhibition Space", "Seating Area", "Refreshments"],
  },
];

const hyderabadEvents = [
  {
    name: "Hyderabad Food Festival",
    date: "2024-11-05",
    location: "Hyderabad",
    type: "Hyderabad",
    description: "A festival celebrating the diverse food culture of Hyderabad.",
    facilities: ["Food Stalls", "Live Music", "Rest Areas"],
  },
];

const events = [
  {
    name: "University Tech Conference",
    date: "2024-10-10",
    location: "University of Hyderabad",
    type: "University",
    description: "A conference on the latest in technology.",
    facilities: ["Wi-Fi", "Lunch Provided", "Parking"],
    reviews: [
      {
        author: "John Doe",
        rating: 5,
        timestamp: "10 October 2024",
        reviewText: "An amazing event! Very informative.",
      },
      {
        author: "Jane Smith",
        rating: 4,
        timestamp: "11 October 2024",
        reviewText: "Great speakers and sessions.",
      },
    ],
  },
  {
    name: "Hyderabad Food Festival",
    date: "2024-11-05",
    location: "Hyderabad",
    type: "Hyderabad",
    description: "A festival celebrating the diverse food culture of Hyderabad.",
    facilities: ["Food Stalls", "Live Music", "Rest Areas"],
    reviews: [
      {
        author: "Alice Williams",
        rating: 4,
        timestamp: "12 November 2024",
        reviewText: "Fantastic food, loved the event!",
      },
    ],
  },
  {
    name: "Science Fair",
    date: "2024-09-30",
    location: "Osmania University",
    type: "University",
    description: "Showcasing innovative projects from students.",
    facilities: ["Exhibition Space", "Seating Area", "Refreshments"],
    reviews: [
      {
        author: "Bob Thompson",
        rating: 5,
        timestamp: "1 October 2024",
        reviewText: "Incredible projects from brilliant students!",
      },
    ],
  },
];


// Renders all events on the main events page
const eventList = (req, res) => {
  res.render("events-list", {
    title: "Event Registration - Find Events Near You",
    pageHeader: {
      title: "Event Registration",
      strapline: "Discover events happening in your area!",
    },
    sidebar:
      "Looking for events to attend? Our site helps you find upcoming events in Hyderabad and universities. Join us for exciting activities!",
    universityEvents,
    hyderabadEvents,
  });
};

// Renders only university events
const getUniversityEvents = (req, res) => {
  res.render("events-list", {
    title: "University Events",
    pageHeader: {
      title: "University Events",
      strapline: "Discover university events happening in Hyderabad!",
    },
    sidebar:
      "Looking for university events to attend? We bring you the best activities at universities in Hyderabad!",
    events: universityEvents,
  });
};

// Renders only Hyderabad events
const getHyderabadEvents = (req, res) => {
  res.render("events-list", {
    title: "Hyderabad Events",
    pageHeader: {
      title: "Hyderabad Events",
      strapline: "Find exciting events happening in Hyderabad!",
    },
    sidebar:
      "Hyderabad hosts a wide variety of events. From food festivals to cultural celebrations, explore the best the city has to offer.",
    events: hyderabadEvents,
  });
};
// Function to calculate average rating
const getAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(1);  // Rounded to 1 decimal place
};

// Renders detailed event info based on event name
const eventInfo = (req, res) => {
  const eventName = req.params.eventName;

  // Find the event by name
  const eventDetails = events.find((event) => event.name === eventName);

  if (!eventDetails) {
    return res.status(404).render("error", {
      title: "Event Not Found",
      message: `No event found with the name "${eventName}".`,
    });
  }

  res.render("event-info", {
    title: eventDetails.name,
    pageHeader: { title: eventDetails.name },
    sidebar: {
      context: `Join us for ${eventDetails.name} and make the most of it!`,
      callToAction: "Leave a review if you attended!",
    },
    event: eventDetails,
    getAverageRating,
    isAuthenticated: req.isAuthenticated && req.isAuthenticated(), 
  });
};

const isAuthenticated = require('../controllers/auth');

// Other event-related logic
const attendEvent = (req, res) => {
  const eventName = req.params.eventName;
  const eventDetails = events.find(event => event.name === eventName);

  if (!eventDetails) {
    return res.status(404).render('error', {
      title: 'Event Not Found',
      message: `No event found with the name "${eventName}".`,
    });
  }

  res.render('event-attended', {
    title: `Attending ${eventDetails.name}`,
    pageHeader: { title: `You're attending ${eventDetails.name}` },
    event: eventDetails,
  });
};


const renderLogin = (req, res) => {
  res.render("login", {
    title: "Login",
    pageHeader: { title: "Login to Continue" },
    sidebar:
      "Already have an account? Log in to access and attend the events of your choice!",
  });
};

const renderSignup = (req, res) => {
  res.render("signup", {
    title: "Sign Up",
    pageHeader: { title: "Create an Account" },
    sidebar:
      "Join us today! Create an account to explore and register for exciting events in your area.",
  });
};


// const addReview = (req, res) => {
//   const eventName = req.params.eventName;
//   res.render('event-review-form', {
//     title: `Review ${eventName}`,
//     pageHeader: { title: `Review ${eventName}` },
//   });
// };

// const submitReview = (req, res) => {
//   const eventName = req.params.eventName;
//   const { name, rating, review } = req.body;

//   // Find the event to add the review to (assuming `events` is an array of event data)
//   const event = events.find(event => event.name === eventName);
//   if (!event) {
//     return res.status(404).render('error', {
//       title: 'Event Not Found',
//       message: `No event found with the name "${eventName}".`,
//     });
//   }

//   // Add the review to the event
//   event.reviews.push({
//     author: name,
//     rating: parseInt(rating, 10),
//     timestamp: new Date().toLocaleDateString(),
//     reviewText: review,
//   });

//   res.redirect(`/events/${eventName}`);
// };


module.exports = {
  eventList,
  getUniversityEvents,
  getHyderabadEvents,
  eventInfo,
  attendEvent, // New attend event handler
  //addReview,
  //submitReview,
  renderLogin, // Login page handler
  renderSignup, // Signup page handler
};
