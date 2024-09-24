/* GET 'about' page */
const about = function (req, res) {
    res.render("generic-text", {
      title: "About EventHub",
      content:
        "EventHub was created to help people find and register for events happening around them.<br/><br/>Displays links to different categories, like university events and Hyderabad events. Displays details of an individual event.Allows users to create an account (sign-up) or log in to their existing account. "
    });
  };
module.exports = {
    about,
};
