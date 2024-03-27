import { toDo } from "./todo-class"
import { AddToObject } from "./addToDoToObject"
import { showAllTasks } from "./all-tasks"
console.log("12345")
export let objectOfToDoObjects = {}
// let toDoList = []
const newToDo = document.getElementById("new-todo")
const dialog = document.getElementById("dialog")
const cancelButton = document.getElementById("cancel-Btn")
const confirmButton = document.getElementById("confirm-Btn")
const form = document.getElementById("form")
const allTasks = document.getElementById("all-tasks")

newToDo.addEventListener("click", () => {
    dialog.showModal();
})
cancelButton.addEventListener("click", () => {
    dialog.close("test cancel string where do i see this");
})

confirmButton.addEventListener("click", createToDo)
function createToDo() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("due-date").value;
    let priority = document.getElementById("priority").value;
    let project = document.getElementById("project").value;
    let newToDo = new toDo (title, description, dueDate, priority, project);
    if (form.checkValidity() === true){ //maybe make function to check validity, including checking whether a task with this title already exists?
        // toDoList.push(newToDo); do I Need a todolist array? I am adding newToDo objects under objectOfToDoObjects
        // console.log(toDoList);
        AddToObject(newToDo, objectOfToDoObjects);
        console.log(objectOfToDoObjects);
        document.querySelector("form").reset();
        // showAllTasks();
        dialog.close();
        setRequiredToFalse() //if form is valid, setting required to false allows me to close the dialog window even though it is empty after clearing the form
        // AddToList(newToDo)
    }
    return newToDo;    
}

function setRequiredToFalse(){
    document.getElementById("title").required = false;
}


// later can create other smaller arrays depending on project
// how will i select which project it belongs to? do I Need another parameter in toDo? dropdown to select the project? create a general project, or allow todos not to have proj?

newToDo.addEventListener("click", () => {
    dialog.showModal();
    document.getElementById("title").required = true;
})

allTasks.addEventListener("click", () => {
    showAllTasks();
})