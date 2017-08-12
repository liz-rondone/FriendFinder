var path = require('path');

module.exports = function(app) {
    // HTML GET REQUESTS 
    // takes the user to the HTML page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // if no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
};