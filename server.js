var express = require('express');
var hbs = require("hbs");
var fs = require("fs");

const port = process.env.PORT || 9998;
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
    res.render('home.hbs',{
        about:'Welcome to my app'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: "Web App",
        about: "Some info about page",
        footer: "2018"
    })
});
app.get('/project', (req, res) => {
    res.render('about.hbs', {
        title: "Web App",
        about: "Some info about Projects",
        footer: "2019"
    })
});

app.listen(port,()=>{
    console.log(`Server is up on ${port}`);
});


