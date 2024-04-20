import { toDo } from "./todo-class"
import { showAllTasks } from "./all-tasks"
import { project } from "./project-class"
import { displayNewProject } from "./display-projects"
import { displayTaskIfRelevant } from "./display-task"
import './style.css';
import { removeClass } from "./remove-class"

let objectOfToDoObjects;
if (localStorage.getItem("testKey") == null) {
    objectOfToDoObjects = [];
}
else {
    let newObject = window.localStorage.getItem("testKey");
    objectOfToDoObjects = JSON.parse(newObject);
}
export {objectOfToDoObjects};

let projectList;
if (localStorage.getItem("storedProjectList") == null) {
    projectList = []
}
else {
    let newProjectList = window.localStorage.getItem("storedProjectList");
    projectList = JSON.parse(newProjectList);
    console.log(projectList)
    console.log(newProjectList)
}
export  {projectList}

const newToDo = document.getElementById("new-todo");
const dialog = document.getElementById("dialog");
const cancelButton = document.getElementById("cancel-Btn");
const confirmButton = document.getElementById("confirm-Btn");
const form = document.getElementById("form");
const allTasks = document.getElementById("all-tasks");
const createNewProjectButton = document.getElementById("create-new-project");
let projectForm = document.getElementById("project-form");
let tasksContainer = document.getElementById("tasks-container")


newToDo.addEventListener("click", () => {
    dialog.showModal();
})
cancelButton.addEventListener("click", () => {
    dialog.close("test cancel string where do i see this");
})

confirmButton.addEventListener("click", createToDo)
function createToDo() {
    let title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    let dueDate = document.getElementById("due-date").value;
    let priority = document.getElementById("priority").value;
    let project = document.getElementById("project").value;
    let newToDo = new toDo (title, description, dueDate, priority, project);
    if (form.checkValidity() === true){ //maybe make function to check validity, including checking whether a task with this title already exists?
        objectOfToDoObjects.push(newToDo)
        // AddToObject(newToDo, objectOfToDoObjects);
        window.localStorage.setItem("testKey", JSON.stringify(objectOfToDoObjects));
        console.log(objectOfToDoObjects)
        console.log(typeof(objectOfToDoObjects))
        let newObject = window.localStorage.getItem("testKey");
        displayTaskIfRelevant(newToDo)
        document.querySelector("form").reset();
        dialog.close();
        setRequiredToFalse() //if form is valid, setting required to false allows me to close the dialog window even though it is empty after clearing the form
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
    removeClass()
    allTasks.classList.add("selected")
    showAllTasks();
})

createNewProjectButton.addEventListener("click", createNewProject)
function createNewProject(event){
    let projectName = document.getElementById("new-project").value;
    if (projectForm.checkValidity() === true){
        event.preventDefault();
        let newProject = new project(projectName);
        projectList.push(newProject);
        window.localStorage.setItem("storedProjectList", JSON.stringify(projectList));
        document.getElementById("project-form").reset();
        displayNewProject(projectList);
    }
}

displayNewProject(projectList);
showAllTasks();