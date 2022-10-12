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

//create
app.post('/users', (req, res, next) => {
  User.create(req.body, (err, user) => {
    next(err);
    res.json(user);
  });
});

app.post('/articles', (req, res, next) => {
  Article.create(req.body, (err, article) => {
    next(err);
    res.json(article);
  });
});

app.post('/comments', (req, res, next) => {
  Comment.create(req.body, (err, comment) => {
    next(err);
    res.json(comment);
  });
});

// read

app.get('/users', (req, res, next) => {
  User.find({}, (err, user) => {
    next(err);
    res.json(user);
  });
});

app.get('/articles', (req, res, next) => {
  Article.find({}, (err, article) => {
    next(err);
    res.json(article);
  });
});

app.get('/comments', (req, res, next) => {
  Comment.find({}, (err, comment) => {
    next(err);
    res.json(comment);
  });
});

//update

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    console.log(err);
    res.json(updatedUser);
  });
});

app.put('/articles/:id', (req, res) => {
  var id = req.params.id;
  Article.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedArticle) => {
      console.log(err);
      res.json(updatedArticle);
    }
  );
});

app.put('/comments/:id', (req, res) => {
  var id = req.params.id;
  Comment.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedComment) => {
      console.log(err);
      res.json(updatedComment);
    }
  );
});

//delete

app.delete("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    next(err);
    res.send(`${deletedUser.title} was deleted`);
  });
});

app.delete("/articles/:id", (req, res, next) => {
  var id = req.params.id;
  Article.findByIdAndDelete(id, (err, deletedArticle) => {
    next(err);
    res.send(`${deletedArticle.title} was deleted`);
  });
});

app.delete("/comments/:id", (req, res, next) => {
  var id = req.params.id;
  Comment.findByIdAndDelete(id, (err, deletedComment) => {
    next(err);
    res.send(`${deletedComment.title} was deleted`);
  });
});

//error handlers middlewares
app.use((err, req, res, next) => {
  res.send('Page Not Found');
});

//listner

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
