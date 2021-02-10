"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    //      string as parameter : returns a number
    Todo.prototype.addTask = function (task) {
        var count = this.tasks.push(task); // using 'this'
        console.log("Item " + task + " is in array Tasks");
        return count;
    };
    Todo.prototype.listAllItems = function () {
        this.tasks.forEach(function (task) {
            console.log(task); // print
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        // error checking
        if (index > -1) {
            this.tasks.splice(index, 1); //splice deletes an Element at a particular position
            // 'index' is the index we choose, '1' is the amount we want to remove
            console.log("Item " + task + " removed from array tasks");
        }
        return this.tasks.length; // return the new length of the array
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Work");
myTodos.addTask("Sleep");
myTodos.listAllItems();
myTodos.deleteTask("Sleep");
