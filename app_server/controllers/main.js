/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Event Regestration Site' });
    };
    module.exports = {
        index
        };