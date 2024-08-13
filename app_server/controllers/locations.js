/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'EventHub - find and register for events',
    pageHeader: {
    title: 'EventHub',
    strapline: 'Discover and register for events near you!'
    },
    locations: [{
    name: 'Tech Conference 2024',
    date: '2024-09-15',
    location: 'Convention Center, Hyderabad',
    description: 'A conference for tech enthusiasts.',
    registrationFee: '₹500'
    },{
    name: 'Art Expo',
    date: '2024-10-01',
    location: 'Art Gallery, Mumbai',
    description: 'An exhibition showcasing local artists.',
    registrationFee: '₹300'
    },{
    name: 'Music Fest',
    date: '2024-11-20',
    location: 'Open Grounds, Bangalore',
    description: 'A festival featuring live music performances.',
    registrationFee: '₹700'
}]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };

