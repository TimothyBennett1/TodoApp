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

    console.log($stateParams);

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
          $scope.getTodos();
        })
    }

    $scope.addNote = (id, note) => {
      appSvc.addNote(id, note)
        .then((note) => {
          $scope.note = {};
          $scope.getTodos();
        })
    }

  })
