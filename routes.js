angular.module("taskApp").config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/users", {
        templateUrl: "views/users.html",
        controller: "UserController",
      })
      .when("/todos/:username", {
        templateUrl: "views/todos.html",
        controller: "TodoController",
      })
      .otherwise({
        redirectTo: "/users",
      });
  },
]);
