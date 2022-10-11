var express = require('express');
var mongoose = require('mongoose');
var Product = require('./models/product');
var User = require('./models/user');

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
app.post('/users', (req, res) => {
  User.create(req.body, (err, user) => {
    next(err);
    res.json(user);
  });
});

//read

app.get('/users', (req, res, next) => {
  User.find({}, (err, user) => {
    next(err);
    res.json(user);
  });
});

app.get('/users/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    next(err);
    res.json(user);
  });
});

app.get('/userss', (req, res, next) => {
  User.findOne({ name: 'kk' }, (err, user) => {
    next(err);
    res.json(user);
  });
});

//update

app.put('/users', (req, res, next) => {
  User.updateOne(
    { name: 'kk' },
    req.body,
    { new: true },
    (err, updatedUser) => {
      next(err);
      res.json(updatedUser);
    }
  );
});

app.put('/users', (req, res, next) => {
  User.update({ name: 'kk' }, req.body, { new: true }, (err, updatedUser) => {
    next(err);
    res.json(updatedUser);
  });
});

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    console.log(err);
    res.json(updatedUser);
  });
});

//delete

app.delete('/users', (req, res) => {
  var id = req.params.id;
  User.findOneAndDelete({ name: 'kk' }, (err, deletedUser) => {
    res.send(`${deletedUser.name} was deleted`);
  });
});

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    res.send(`${deletedUser.name} was deleted`);
  });
});
// app.post('/products', (req, res, next) => {
//   //capture the data
//   //console.log(req.body);
//   //save the data to database
//   Product.create(req.body, (err, product) => {
//     //console.log(err, product);
//     next(err);
//     res.json(product);
//   });
//   //send response
// });

// app.get('/products', (req, res) => {
//   Product.findOne({ title: 'google pixel' }, (err, product) => {
//     console.log(err);
//     res.json(product);
//   });
// });

// app.get('/products/:id', (req, res) => {
//   //grab the id
//   var id = req.params.id;
//   Product.findById(id, (err, product) => {
//     console.log(err);
//     res.json(product);
//   });
// });

// app.put('/products/:id', (req, res) => {
//   console.log(req.body);
//   var id = req.params.id;
//   Product.findByIdAndUpdate(
//     id,
//     req.body,
//     { new: true },
//     (err, updatedProduct) => {
//       console.log(err);
//       res.json(updatedProduct);
//     }
//   );
// });

// app.delete('/products/:id', (req, res) => {
//   //grab the id
//   var id = req.params.id;
//   Product.findOneAndDelete({ title: google }, (err, deletedProduct) => {
//     res.send(`${deletedProduct.title} was deleted`);
//   });
// });

//error handlers middlewares
app.use((err, req, res, next) => {
  res.send('Page Not Found');
});

//listner

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
