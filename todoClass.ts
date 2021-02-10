//                           ./ means it's in the same directory, this is the file path
import { todoInterface } from './todoInterface';

class Todo implements todoInterface {

    constructor() { }
    tasks: Array<string> = [];

    //      string as parameter : returns a number
    addTask(task: string): number {
        let count: number = this.tasks.push(task); // using 'this'
        console.log("Item " + task + " is in array Tasks");
        return count;
    }

    listAllItems(): void {
        this.tasks.forEach((task) => { // '=>' is an arrow function, instead of writing 'function'
            console.log(task); // print
        })
    }

    deleteTask(task: string): number {
        let index: number = this.tasks.indexOf(task);
        // error checking
        if (index > -1) {
            this.tasks.splice(index, 1); //splice deletes an Element at a particular position
            // 'index' is the index we choose, '1' is the amount we want to remove

            console.log("Item " + task + " removed from array tasks");
        }
        return this.tasks.length; // return the new length of the array
    }

}

let myTodos = new Todo();

myTodos.addTask("Work");
myTodos.addTask("Sleep");

myTodos.listAllItems();

myTodos.deleteTask("Sleep");