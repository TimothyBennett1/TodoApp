angular.module('app')
  .service('appSvc', function($http) {

      let baseUrl = 'http://localhost:4000';

      this.getTodos = () => {
        return $http.get(baseUrl + '/api/todos').then((res) => {
          return res.data;
        })
      },

      this.getOneTodo = () => {
        return $http.get(baseUrl + '/api/todos/' + id).then((res) => {
          return res.data;
        })
      },

      this.makeTodo = () => {
        return $http.post(baseUrl + '/api/todos').then((res) => {
          return res.data;
        })
      },

      this.editTodo = () => {
        return $http.put(baseUrl + '/api/todos/' + id).then((res) => {
          return res.data;
        })
      }
  })
