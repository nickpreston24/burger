var mysql = require("mysql");
let {
    Password,
    PORT,
    JAWSDB_URL
} = process.env;

if (JAWSDB_URL) {
    connection = mysql.createConnection(JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: PORT | 3306,
        user: "root",
        password: Password,
        database: "burgers_db"
    });
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;