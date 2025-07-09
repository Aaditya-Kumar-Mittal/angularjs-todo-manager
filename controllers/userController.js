angular.module("taskApp").controller("UserController", [
  "$scope",
  "$location",
  "UserService",

  function ($scope, $location, UserService) {
    $scope.users = UserService.getUsers();
    $scope.newUser = "";

    $scope.addUser = function () {
      if ($scope.newUser && !$scope.users.includes($scope.newUser)) {
        UserService.addUsers($scope.newUser);
        $scope.users = UserService.getUsers();
        $scope.newUser = "";
      }
    };

    $scope.openTodos = function (username) {
      $location.path("/todos/" + username);
    };
  },
]);
