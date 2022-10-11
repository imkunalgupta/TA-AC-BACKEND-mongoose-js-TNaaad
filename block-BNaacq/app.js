var express = require('express');

var mongoose = require('mongoose');
var User = require('./models/user');
var Article = require('./models/article');
var Comment = require('./models/comment');

//connect to database

mongoose.connect('mongodb://localhost:27017/sample', (err) => {
  console.log(err ? err : 'Connected to Database');
});

//instance the app
var app = express();

//middlewares
app.use(express.json());

//routes

app.get('/', (req, res) => {
  res.send('Welcome');
});

//error handlers middlewares
app.use((err, req, res, next) => {
  res.send('Page Not Found');
});

//listner

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
