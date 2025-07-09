angular.module("taskApp").controller("TodoController", [
  "$scope",
  "$location",
  "$routeParams",
  "TodoService",
  function ($scope, $location, $routeParams, TodoService) {
    // Bhai route ko kaho mujhe username de
    $scope.username = $routeParams.username;
    $scope.todos = TodoService.getTodos($scope.username);
    $scope.newTodo = { title: "", status: "Pending" };

    // Controller Functions

    $scope.addTodo = function () {
      if ($scope.newTodo.title) {
        TodoService.addTodos($scope.username, angular.copy($scope.newTodo));
        $scope.newTodo.title = "";
        $scope.newTodo.status = "Pending";
        $scope.todos = TodoService.getTodos($scope.username);
      }
    };

    $scope.updateTodo = function (index) {
      TodoService.updateTodos($scope.username, index, $scope.todos[index]);
      $scope.newTodo.title = "";
      $scope.todos = TodoService.getTodos($scope.username);
    };

    $scope.deleteTodo = function (index) {
      TodoService.deleteTodos($scope.username, index);
      $scope.todos = TodoService.getTodos($scope.username);
    };

    $scope.goBack = function () {
      $location.path("/users");
    };
  },
]);
