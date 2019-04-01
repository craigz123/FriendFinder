//required dependencies
var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;

//middleware for parsing incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//adding application routes
// var friends = require('./app/data/friends.js');
// var htmlRoutes = require("./app/routing/htmlRoutes.js");
// var apiRoutes = require("./app/routing/apiRoutes.js");
// app.use(htmlRoutes);
// app.use(apiRoutes);
require("./app/routing/htmlRoutes")(app);



//start listening to port
app.listen(PORT, function() {
     console.log("App listening on PORT " + PORT);
});