/*	Author: Michael Preston
 *	Created Date: "01-11-2019"
 */
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function (request, response) {
    burger.all(function (data) {
        var obj = {
            burgers: data
        };
        console.log(obj);
        response.render("index", obj);
    });
})

router.post("/api/burgers", function (request, response) {
    burger.create([
        "burger_name", "devoured"
    ], [
        request.body.burger_name, request.body.devoured
    ], function (result) {
        response.json({
            id: result.id
        })
    })
})

router.put("/api/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;
    console.log("body: ", request.body);
    burger.update({
        devoured: request.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    })
})

module.exports = router;