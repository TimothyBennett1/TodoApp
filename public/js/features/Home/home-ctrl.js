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

    $scope.scratchOut = () => {
      document.getElementById('scratch').style.textDecoration = 'line-through'
    }

    $scope.getTodos = () => {
      appSvc.getTodos()
        .then((results) => {
          $scope.todos = results;
        })
    }
    $scope.getTodos();

    $scope.todo = {};

    $scope.addTodo = (todo) => {
      appSvc.makeTodo(todo)
        .then((todo) => {
          $scope.todo = {};
          $scope.getTodos();
          $scope.closeModal();
        })
    }

    $scope.addNote = (id, note) => {
      appSvc.addNote(id, note)
        .then((note) => {
          $scope.notes = {};
          $scope.getTodos();
        })
    }

  })
