var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema(
  {
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: ObjectId,
  },
  { timestamps: true }
);
