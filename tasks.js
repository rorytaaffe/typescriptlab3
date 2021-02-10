var tasks = []; // one way of defining array that holds strings
var test = []; // other way of doing it
// function name (takes a string as a parameter, 'task'): returns a number/int
function addTask(task) {
    var count = tasks.push(task); // adds string 'task' to our arrray 'tasks', 
    // 'count' is a number that counts when you add a string to the array
    console.log("Item " + task + " added to array Tasks");
    return count;
}
//                      void because it's not returning a value, we're just printing out
function listAllTasks() {
    for (var i = 0; i < tasks.length; i++) {
        console.log("Item " + tasks[i] + " is in array Tasks");
    }
    // this function will apply to every array in the '()' , so 'task'
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = task.indexOf(task);
    // error checking
    if (index > -1) {
        tasks.splice(index, 1); //splice deletes an Element, 
        // 'index' is the index we choose, '1' is the amount we want to remove
        console.log("Item " + task + " removed from array tasks");
    }
    return tasks.length;
}
console.log(addTask("Homework"));
console.log(addTask("Sleep"));
listAllTasks();
console.log(deleteTask("Sleep"));
