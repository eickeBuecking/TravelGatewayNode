var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),

    bodyParser = require('body-parser'),
    authenticationChecker = require('./authentication_filter.js');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');
mongoose.set('debug', true);
mongoose.set('useFindAndModify', true);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(authenticationChecker.checkToken);

var routes = require('./api/routes/TravelManagerRoutes'); //importing route
routes(app); //register the route

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('Travelmanager RESTful API server started on: ' + port);
