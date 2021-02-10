// defining this as an interface, 'export' is needed if you are going to be exporting it to another class/file
export interface todoInterface{
    // similar to other file when we used functions, but using methods instead
    tasks: Array<string>; // it has to have an array of string
    addTask(task:string):number; // method to add task
    listAllItems():void; // method to print out all items
    deleteTask(task:string):number; // deletes a task, takes string as a parameter, returns a number
}