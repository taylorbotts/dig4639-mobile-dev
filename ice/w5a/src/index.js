import Task from "./components/Task";

let element;
let inputElement;

function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    inputElement = document.getElementById("taskText");
    addTaskButton.addEventListener("click", onClick)
}

function onClick() {
    var newTask = new Task({
        content: inputElement.value
    })
    element.appendChild(newTask.render());

}

window.addEventListener("DOMContentLoaded", runOnLoad);