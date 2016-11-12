angular.module('app', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './../features/Home/home-tmpl.html',
        controller: 'homeCtrl'
      })
      .state('todo', {
        url: '/todos/:id',
        templateUrl: './../features/Todo/todo-tmpl.html',
        controller: to
      })
  })
