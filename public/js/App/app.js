angular.module('app', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './js/features/Home/home-tmpl.html',
        controller: 'homeCtrl'
      })
      .state('todo', {
        url: '/todos/:id',
        templateUrl: './js/features/Todo/todo-tmpl.html',
        controller: 'todoCtrl'
      })
  });
