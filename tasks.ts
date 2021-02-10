let tasks: Array<string> = []; // defining array that holds strings
let test: string[] = [];    // other way of doing it

// in this file, there are many different uses of the same variable name 'task' but they are all
// different variables/parameters because they are only visible in the funciton that they are in
// so you can use the same name many times

// function name (takes a string as a parameter, 'task'): returns a number/int
function addTask(task: string): number {
    let count: number = tasks.push(task); // '.push' adds string 'task' to our arrray 'tasks', 
    // 'count' is a number that counts when you add a string to the array, the new length of the array
    console.log("Item " + task + " added to array Tasks"); // print out
    return count; // returning the length of the array, so when we call this function, this will be returned
}

//                       void because it's not returning a value, we're just printing out
function listAllTasks(): void {
    for (let i = 0; i < tasks.length; i++) {
        console.log("Item " + tasks[i] + " is in array Tasks");
    }
    // this function will apply to every array in the '()' , so 'task', so it will return all elements of
    // the array 'task'
    tasks.forEach(function (task) {
        console.log(task); // print
    })
}

function deleteTask(task: string) {
    let index: number = task.indexOf(task);
    // error checking
    if (index > -1) {
        tasks.splice(index, 1); //splice deletes an Element at a particular position
        // 'index' is the index we choose, '1' is the amount we want to remove

        console.log("Item " + task + " removed from array tasks");
    }
    return tasks.length; // return the new length of the array
}

console.log(addTask("Homework"));
console.log(addTask("Sleep"));

listAllTasks();

console.log(deleteTask("Sleep"));