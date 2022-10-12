var mongoose = require('mongoose');
var User = require('./user');
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    author: { type: Schema.Types.ObjectId, ref: User },
    comments: String,
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
