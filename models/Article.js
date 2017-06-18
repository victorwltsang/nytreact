var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title Required"
  },
  date: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String,
    required: true,
    required: "URL Required",
    unique: true
  }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
