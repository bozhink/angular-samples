(function (angular) {
    'use strict';

    var id = 0;

    function getId() {
        return id += 1;
    }

    angular.module('todoApp', [])
        .controller('TodoListController', function() {
            var todoList = this;
            todoList.todos = [{
                id: getId(),
                text: 'learn angular',
                done: true
            }, {
                id: getId(),
                text: 'build an angular app',
                done: false
            }];

            todoList.addTodo = function() {
                todoList.todos.push({
                    id: getId(),
                    text: todoList.todoText,
                    done: false
                });
                todoList.todoText = '';
            };

            todoList.remaining = function() {
                var count = 0;
                angular.forEach(todoList.todos, (todo) => count += todo.done ? 0 : 1);
                return count;
            };

            todoList.archive = function() {
                var oldTodos = todoList.todos;
                todoList.todos = [];
                angular.forEach(oldTodos, (todo) => todo.done ? null : todoList.todos.push(todo));
            };
        });

}(window.angular));