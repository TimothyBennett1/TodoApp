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
        })
    }
    $scope.getTodos();

    $scope.addTodo = () => {
      appSvc.makeTodo()
        .then((todo) => {
          $scope.todo = {};
        })
    }

  })
