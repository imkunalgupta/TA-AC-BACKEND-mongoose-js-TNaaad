var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

//connect to database

mongoose.connect('mongodb://localhost:27017/sample', (err) => {
  console.log(err ? err : 'Connected to Database');
});

//instance the app
var app = express();

//middlewares
app.use(logger('dev'));

//routes

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/users', (req, res) => {
  res.send('Users Page');
});

//error handlers middlewares
app.use((req, res, next) => {
  res.send('Page Not Found');
});

//listner

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
