
const universityEvents = [
  {
    name: "Bathukamma celebrations",
    fromDate: "2024-10-05",
    toDate: "2024-10-05", // Same date since it's a one-day event
    time: "10:00 AM - 5:00 PM",
    fee:"Free",
    location: "At Anurag University",
    type: "University",
    description: "A celebration of the Bathukamma festival with traditional activities.",
    facilities: ["Wi-Fi", "Lunch Provided", "Parking"],
  },
  {
    name: "Specdam Auditions",
    fromDate: "2024-09-20",
    toDate: "2024-09-20",
    time: "9:00 AM - 3:00 PM",
    fee:160,
    location: "Anurag University",
    type: "University",
    description: "Auditions for the annual Specdam event showcasing student talents.",
    facilities: ["Exhibition Space", "Seating Area", "Refreshments"],
  },
];

const hyderabadEvents = [
  {
    name: "Hyderabad Food Festival",
    fromDate: "2024-11-05",
    toDate: "2024-11-07",
    time: "11:00 AM - 9:00 PM",
    fee:150,
    location: "Hyderabad",
    type: "Hyderabad",
    description: "A festival celebrating the diverse food culture of Hyderabad.",
    facilities: ["Food Stalls", "Live Music", "Rest Areas"],
  },
  {
    name: "Navratri Utsav 2024",
    fromDate: "2024-10-04",
    toDate: "2024-10-12",
    time: "6:00 PM - 11:00 PM",
    fee:200,
    location: "Various locations in Hyderabad",
    type: "Hyderabad",
    description: "Celebrate the vibrant festival of Navratri with traditional music, dance, and cultural performances.",
    facilities: ["Food Stalls", "Parking", "Rest Areas"],
  },
];

const events = [
  {
    name: "Bathukamma celebrations",
    fromDate: "2024-10-05",
    toDate: "2024-10-05",
    time: "10:00 AM - 5:00 PM",
    fee:"Free",
    location: "E-Block and also Near APJ",
    type: "University",
    description: "A celebration of Bathukamma festival with traditional activities.",
    facilities: ["Wi-Fi", "Lunch Provided", "Parking"],
    reviews: [
      {
        author: "Jyothi  ",
        rating: 5,
        timestamp: "05 October 2024",
        reviewText: "Enjoyed a lot!",
      },
      {
        author: "Ravi  ",
        rating: 4,
        timestamp: "05 October 2024",
        reviewText: "Beautiful event.",
      },
    ],
  },
  {
    name: "Hyderabad Food Festival",
    fromDate: "2024-11-05",
    toDate: "2024-11-07",
    time: "11:00 AM - 9:00 PM",
    fee:150,
    location: "Madhapur, Hyderabad",
    type: "Hyderabad",
    description: "A festival celebrating the diverse food culture of Hyderabad.",
    facilities: ["Food Stalls", "Live Music", "Rest Areas"],
    reviews: [
      {
        author: "Shruthi  ",
        rating: 4,
        timestamp: "06 November 2024",
        reviewText: "Fantastic food, loved the event!",
      },
    ],
  },
  {
    name: "Specdam Auditions",
    fromDate: "2024-09-20",
    toDate: "2024-09-20",
    time: "9:00 AM - 3:00 PM",
    fee:160,
    location: "E-Block Auditorium",
    type: "University",
    description: "Auditions for showcasing innovative projects from students.",
    facilities: ["Exhibition Space", "Seating Area", "Refreshments"],
    reviews: [
      {
        author: "Vijay  ",
        rating: 5,
        timestamp: "9 September 2024",
        reviewText: "I am satisfied with every students performance",
      },
    ],
  },
  {
    name: "Navratri Utsav 2024",
    fromDate: "2024-10-04",
    toDate: "2024-10-12",
    time: "6:00 PM - 11:00 PM",
    fee:200,
    location: "Various locations of Hyderabad like Jubilee Hills, Gachibowli, etc.",
    type: "Hyderabad",
    description: "Celebrate the vibrant festival of Navratri with traditional music, dance, and cultural performances.",
    facilities: ["Food Stalls", "Parking", "Rest Areas"],
    reviews: [
      {
        author: "Vikram  ",
        rating: 4,
        timestamp: "09 October 2024",
        reviewText: "Navratri Utsav 2024 is a celebration of life, culture, and devotion.",
      },
      {
        author: "Srujan  ",
        rating: 5,
        timestamp: "10 October 2024",
        reviewText: "Happy Dusshera to everyone. I really enjoyed a lot ",
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
      "Looking for events to attend? Our site helps you find upcoming events in Hyderabad and university. Join us for exciting activities!Whether you’re interested in music concerts, stand-up comedy, workshops, or cultural festivals, we have something for everyone. Explore a diverse array of events happening across the city and on Anurag university campus.",
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

const isAuthenticated = require('./eventController');

// Other event-related logic
// const attendEvent = (req, res) => {
//   const eventName = req.params.eventName;
//   const eventDetails = events.find(event => event.name === eventName);

//   if (!eventDetails) {
//     return res.status(404).render('error', {
//       title: 'Event Not Found',
//       message: `No event found with the name "${eventName}".`,
//     });
//   }

//   res.render('event-attended', {
//     title: `Attending ${eventDetails.name}`,
//     pageHeader: { title: `You're attending ${eventDetails.name}` },
//     event: eventDetails,
//   });
// };


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
// const renderAddEventForm = (req, res) => {
//   res.render('add_event', {
//     title: 'Add New Event',
//     pageHeader: { title: 'Add a New Event' },
//   });
// };

// const addEvent = (req, res) => {
//   const { name, fromDate, toDate, time, fee, location, type, description, facilities } = req.body;

//   // Create a new event object
//   const newEvent = new Event({
//     name,
//     fromDate,
//     toDate,
//     time,
//     fee,
//     location,
//     type,
//     description,
//     facilities: facilities.split(',').map(facility => facility.trim()) // Convert comma-separated string to array
//   });

  // Save the event to MongoDB
//   newEvent.save((err) => {
//     if (err) {
//       return res.status(500).render('error', {
//         title: 'Error',
//         message: 'Failed to add the event. Please try again.'
//       });
//     }
//     res.redirect('/events');  // Redirect to events list after adding
//   });
// };



module.exports = {
  eventList,
  getUniversityEvents,
  getHyderabadEvents,
  eventInfo,
  renderLogin, // Login page handler
  renderSignup, // Signup page handler 
};
