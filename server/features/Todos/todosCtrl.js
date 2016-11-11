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
        Todo.findbyId(req.params.id)
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
}
