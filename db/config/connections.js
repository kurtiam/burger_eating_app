const mysql = require("mysql");
const PORT = 3306;
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        port: PORT,
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });

    // Connect to db
    connection.connect(function (err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        console.log("connected to mySQL as id " + connection.threadId + "\n");
    });
};
module.exports = connection;