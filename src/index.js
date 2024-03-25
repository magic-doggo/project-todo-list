import { toDo } from "./todo-class"

console.log("12345")

let toDoList = []
const newToDo = document.getElementById("new-todo")
const dialog = document.getElementById("dialog")
const cancelButton = document.getElementById("cancel-Btn")
const confirmButton = document.getElementById("confirm-Btn")

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
    toDoList.push(newToDo);
    console.log(toDoList);
    return newToDo;    
}

// function createToDo(){
//     let newToDo = new toDo(title, description, dueDate)
// } first create button to request input from user for new todo. then take this input and add it through newToDo
// title = document.getElementById("title").value? make sure id of title is correct
// before that make an array of todos that this gets added to
// later can create other smaller arrays depending on project
// how will i select which project it belongs to? do I Need another parameter in toDo? dropdown to select the project? create a general project, or allow todos not to have proj?

newToDo.addEventListener("click", () => {
    dialog.showModal();
})