var path = require('path');
var express = require('express');

var app = express();
var mongoose = require('mongoose');

var configs = require('./configs.js');
var route = require('./route.js');

app.set('views',__dirname + '/views');

app.set('port', process.env.PORT || 3000);
app.use('/',route);

var dbOptions = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connection.openUri('mongodb://localhost/twitdb');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

app.listen(app.get('port'), function() {
    console.log('Server listening on port' + app.get('port'));
});