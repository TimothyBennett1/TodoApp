const mongoose = require('mongoose');

const Todo = new mongoose.Schema {
  todo: {type: String},
  date: {type: Date, default: Date.now()}
}

module.exports = mongoose.model('Todo', Todo);
