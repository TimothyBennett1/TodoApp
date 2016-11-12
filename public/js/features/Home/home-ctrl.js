angular.module('app')
  .controller('homeCtrl', ($scope, appSvc, $stateParams) => {

    $scope.getTodos = () => {
      appSvc.getTodos()
        .then((results) => {
          $scope.todos = results;
        })
    }
    getTodos();

    $scope.addTodo = () => {
      appSvc.makeTodo()
        .then((todo) => {
          $scope.todo = {};
        })
    }

  })
