const Todo = require('./Todo');

module.exports = {

    getTodos(req, res) {
        Todo.find()
            .exec((err, todo) => {
                if (err) {
                    return res.status(500).json(err);
                }
                return res.status(200).json(todo);
            });
    },

    getOneTodo(req, res) {
        Todo.findById(req.params.id)
            .exec((err, todo) => {
                if (err) {
                    return res.status(500).json(err);
                }
                return res.status(200).json(todo);
            });
    },

    makeTodo(req, res) {
        Todo.create(req.body).save((err, todo) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json(todo);
        });
    },

    deleteTodo(req, res) {
        Todo.findByIdAndRemove(req.params.id, (err, todo) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json(todo);
        });
    },

    editTodo(req, res) {
        Todo.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json(todo);
        });
    },

    addAndEditNote(req, res) {
      todo.findById(req.params.id, (err, todo) => {
        todo.note.forEach( note => {
          if(req.body.note._id === note._id){
            note: req.body.note;
          } else {
            {$push: {'note': {note: req.body.note}}};
          }
        });
      });
    }
}
