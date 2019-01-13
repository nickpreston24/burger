/*	Author: Michael Preston
 *	Created Date: "01-11-2019"
 */
var orm = require('../config/orm.js');
var burger = {
    all: function (callback) {
        orm.selectAll("burgers", function (response) {
            callback(response);
        })
    },
    create: function (cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function (response) {
            callback(response);
        });
    },
    update: function (columnValues, condition, callback) {
        console.log('cols:', columnValues);
        orm.updateOne("burgers", columnValues, condition, function (response) {
            callback(response);
        });
    }
}

module.exports = burger;