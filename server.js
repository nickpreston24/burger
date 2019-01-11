/*	Author: Michael Preston
 *	Created Date: "01-11-2019"
 */

var express = require('express');
var app = express();

var PORT = process.env.PORT | 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public")); //for use with front-end materials under a /public/

// require("./routes/html-routes.js")(app);
// require("./routes/burger-api-routes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});