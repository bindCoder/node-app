var express = require('express');
var hbs = require("hbs");
var fs = require("fs");


var app = express();
var partials = hbs.registerPartials(__dirname + '/views/partials');


app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    fs.appendFile("server.log", log + '\n', (err) => {
        console.log(err);
    });
    next();
});


app.get('/', (req, res) => {
    res.send("<h1>Basic Server Setup</h1>" + __dirname);
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: "Web App",
        about: "Some info about page",
        footer: "2018"
    })
});

app.listen(9998);


