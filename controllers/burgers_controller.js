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
        "name", "devoured"
    ], [
        request.body.name, request.body.devoured
    ], function (result) {
        response.json({
            id: result.id
        })
    })
})

router.put("/api/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;
    burger.update({}, condition, function (result) {
        if (result.changedRows == 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    })
})

module.exports = router;