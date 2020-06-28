const connection = require("./connections");

var orm = {
    selectAll: function (cb) {
        var query = "SELECT * FROM burgers;";
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function (burger, cb) {
        var query = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(query, burger, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function (id, cb) {
        var query = "UPDATE burgers SET devoured=true WHERE id=(?)";
        connection.query(query, id, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};
module.exports = orm;