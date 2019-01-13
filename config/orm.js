/*	Author: Michael Preston
 *	Created Date: "01-11-2019"
 */
var connection = require('./connection.js');

var orm = {

    selectAll: function (tableName, callback) {
        var sql = `select * from ${tableName};`;
        connection.query(sql, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    },

    insertOne(table, columns, values, callback) {
        var sql = `insert into ${table}`;
        sql += `(${columns.toString()}) values (${makeQuestionMarks(values.length)})`;
        console.log(sql);
        connection.query(sql, values, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    },

    updateOne(table, columnValues, condition, callback) {        
        var sql = "update " + table;
        sql += ` set ${objToSql(columnValues)} where ${condition}`;
        console.log(sql);
        connection.query(sql, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    }
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const range = (start, stop, step = 1) => Array(Math.ceil((1 + stop - start) / step)).fill(start).map((x, y) => x + y * step);

function makeQuestionMarks(num) {
    return range(1, num).map(_ => "?").toString(); //...because I can.
}

module.exports = orm;