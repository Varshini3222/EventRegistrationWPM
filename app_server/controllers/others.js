<<<<<<< HEAD
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
=======
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
>>>>>>> e6c4061f6b4b65a70c97651b0b5914c6f7de8cfc
