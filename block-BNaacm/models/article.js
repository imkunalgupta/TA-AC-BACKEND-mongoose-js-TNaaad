var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema(
  {
    title: String,
    discription: String,
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
