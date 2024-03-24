import { toDo } from "./todo-class"

console.log("asdasdasdasd")

// function createToDo(){
//     let newToDo = new toDo(title, description, dueDate)
// } first create button to request input from user for new todo. then take this input and add it through newToDo
//title = document.getElementById("title").value? make sure id of title is correct
//before that make an array of todos that this gets added to
//later can create other smaller arrays depending on project
//how will i select which project it belongs to? do I Need another parameter in toDo? dropdown to select the project? create a general project, or allow todos not to have proj?

const newToDo = document.getElementById("new-todo")
const dialog = document.getElementById("dialog")

newToDo.addEventListener("click", () => {
    dialog.showModal();
})