angular.module("taskApp").factory("TodoService", function () {
  function getKey(user) {
    return "todos_" + user;
  }

  return {
    getTodos: function (user) {
      var todos = localStorage.getItem(getKey(user));
      return todos ? JSON.parse(todos) : [];
    },
    saveTodos: function (user, todos) {
      localStorage.setItem(getKey(user), JSON.stringify(todos));
    },
    addTodos: function (user, todo) {
      var todos = this.getTodos(user);
      todos.push(todo);
      this.saveTodos(user, todos);
    },
    updateTodos: function (user, index, todo) {
      var todos = this.getTodos(user);
      todos[index] = todo;
      this.saveTodos(user, todos);
    },
    deleteTodos: function (user, index) {
      var todos = this.getTodos(user);
      todos.splice(index, 1);
      this.saveTodos(user, todos);
    },
  };
});
