import { toDo } from "./todo-class"

console.log("12345")

let toDoList = []
const newToDo = document.getElementById("new-todo")
const dialog = document.getElementById("dialog")
const cancelButton = document.getElementById("cancel-Btn")
const confirmButton = document.getElementById("confirm-Btn")
const form = document.getElementById("form")

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
    // let title2 = document.getElementById("title");

    let dueDate = document.getElementById("due-date").value;
    let priority = document.getElementById("priority").value;
    let project = document.getElementById("project").value;
    let newToDo = new toDo (title, description, dueDate, priority, project);
    if (form.checkValidity() === true){
        toDoList.push(newToDo);
        console.log(toDoList);
        document.querySelector("form").reset();
        dialog.close()
        setRequiredToFalse() //if form is valid, setting required to false allows me to close the dialog window even though it is empty after clearing the form
    }
    return newToDo;    
}

function setRequiredToFalse(){
    document.getElementById("title").required = false;
}

// make sure title is required when pressing submit


// later can create other smaller arrays depending on project
// how will i select which project it belongs to? do I Need another parameter in toDo? dropdown to select the project? create a general project, or allow todos not to have proj?

newToDo.addEventListener("click", () => {
    dialog.showModal();
    document.getElementById("title").required = true;
})