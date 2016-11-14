const todoCtrl = require('./todoCtrl')

module.exports = app => {

  // GET
  app.get('/api/todos', todoCtrl.getTodos);
  app.get('api/todos/:id', todoCtrl.getOneTodo);

  // POST
  app.post('/api/todos', todoCtrl.makeTodo);

  // Put
  app.put('/api/todos/:id', todoCtrl.addNote);
}
