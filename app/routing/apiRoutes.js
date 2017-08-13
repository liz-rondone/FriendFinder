// linking routes to a series of data sources that hold arrays of info
var friendsData = require('../data/friends');

module.exports = function(app) {
    // API GET REQUESTS 
    // handles when user visits the HTML page
    app.get('/api/friendsList', function(req, res) {
        res.json(friendsData);
    });

    // API POST REQUESTS
    // handles when a user submits a form and sends data to server. when a user submits the form data (a JSON object) --> the JSON is pushed to the appropriate JS array --> then the server saves the data to the friendsData array.
    app.post('/api/friendsList', function(req, res) {
        friendsData.push(req.body);
        res.json(true);
    });
};