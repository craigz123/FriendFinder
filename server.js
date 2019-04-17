//Required dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

//Body Parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Express
app.use(express.static("app/public"));

//Adding application routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

//Port listening message
app.listen(PORT, function() {
     console.log("App listening on PORT " + PORT);
});