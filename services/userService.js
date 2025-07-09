angular.module("taskApp").factory("UserService", function () {
  var myKey = "users";

  return {
    getUsers: function () {
      var users = localStorage.getItem(myKey);
      return users ? JSON.parse(users) : [];
    },
    addUsers: function (user) {
      var users = this.getUsers();
      users.push(user);
      localStorage.setItem(myKey, JSON.stringify(users));
    },
  };
});
