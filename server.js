//required dependencies
var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;

//middleware for parsing incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);



//start listening to port
app.listen(PORT, function() {
     console.log("App listening on PORT " + PORT);
});