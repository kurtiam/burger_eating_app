const express = require("express");
const bodyParser = require("body-parser");


// express settings
var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello Burger Test'))

app.listen(port, function () {
    console.log("Server listening on PORT: http://localhost:" + port);
})