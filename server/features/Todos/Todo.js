const mongoose = require('mongoose');

const Todo = new mongoose.Schema ({
  todo: {type: String, required: true},
  date: {type: Date, default: Date.now()},
  notes: [{
    note: {type: String}
  }]
});

module.exports = mongoose.model('Todo', Todo);
