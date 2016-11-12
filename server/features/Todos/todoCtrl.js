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

    addNote(req, res) {
      Todo.findByIdAndUpdate(req.params.id,
        {$push: {'note': {note: req.body.note}}},
        {safe: true, new : true},
        (err, note) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(note);
      });
    }
}
