var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  favourites: [String],
  marks: [Number],
  password: { type: String, minlength: 5, maxlength: 20 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('user', userSchema);
