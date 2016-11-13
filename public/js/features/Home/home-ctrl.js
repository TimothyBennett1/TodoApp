angular.module('app')
  .controller('homeCtrl', function($scope, appSvc, $stateParams) {

    $scope.openModal = () => {
      document.getElementById('modal').style.display = 'flex'
      $scope.open = true;
    };

    $scope.closeModal = () => {
      document.getElementById('modal').style.display = 'none'
      $scope.open = false;
    }

    $scope.getTodos = () => {
      appSvc.getTodos()
        .then((results) => {
          $scope.todos = results;
          console.log($scope.todos);
        })
    }
    $scope.getTodos();

    $scope.todo = {};

    $scope.addTodo = (todo) => {
      appSvc.makeTodo(todo)
        .then((todo) => {
          $scope.todo = {};
        })
    }

    $scope.addNote = (id, note) => {
      appSvc.addNote(note)
        .then((note) => {
          $scope.todo.notes.note = {};
        })
    }

  })
