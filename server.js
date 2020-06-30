const express = require("express");
const bodyParser = require("body-parser");

var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use("/public", express.static("public"));

var expressHandle = require('express-handlebars');
app.engine('handlebars', expressHandle({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');

app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);

app.listen(port, function () {
    console.log("Server listening on PORT: http://localhost:" + port);
})