/*	Author: Michael Preston
 *	Created Date: "01-11-2019"
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

app.use(express.static("public")); //for use with front-end materials under a /public/
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var exphbs = require('express-handlebars');

/*Handlebars*/
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});