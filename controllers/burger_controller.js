var express = require('express');
var controller = express.Router();
var burger = require('../models/burger.js');

controller.get('/', function (req, res) {
    res.redirect('/burgers');
});

controller.get('/burgers', function (req, res) {
    burger.all(function (burger_data) {
        res.render('index', { burger_data });
    });
});


controller.post('/burgers/create', function (req, res) {
    if (req.body.burger_name == '') {
        console.log('Please Enter A Burger Name');
        res.redirect('/');
    } else {
        burger.create(req.body.burger_name, function (result) {
            console.log(result);
            res.redirect('/');
        });
    }
});

controller.post('/burgers/update', function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
    });
});

module.exports = controller;