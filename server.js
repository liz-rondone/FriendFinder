var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// create empty array to store reserved tables
var results = [];

// sets up the express app to handle the data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// routes give servers a route of hot to respond when users visit or request data from various URLs
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// start the server
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});