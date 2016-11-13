angular.module('app')
  .controller('todoCtrl', function($scope, $stateParams, devSvc) {

      $scope.getTodo = (id) => {
        devSvc.getOneTodo(id)
          .then((results) => {
            $scope.oneTodo = results;
          })
      }
      $scope.getTodo();
  });
