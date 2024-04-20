import { objectOfToDoObjects } from "./index.js";
import { showAllTasks } from "./all-tasks"

export let displayTaskIfRelevant = function (newToDo) {
    let selectedButton = document.getElementsByClassName("selected");

    // if (newToDo.project == selectedButton[0].innerHTML || selectedButton[0].innerHTML == "All To-Dos" || ("Project: " + newToDo.project) == (tasksContainer.firstChild.lastChild.innerText)) { //maybe also show if last child is unclassified
    if (selectedButton[0].innerHTML == "All To-Dos"){
        showAllTasks();
    }
    else if (newToDo.project == selectedButton[0].innerHTML){
        const element = document.getElementById("tasks-container");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }      
        for (let toDo in objectOfToDoObjects) {
            if (Object.values(objectOfToDoObjects)[toDo].project == selectedButton[0].innerHTML) {
            let task = document.createElement("div");
            document.getElementById("tasks-container").appendChild(task);
            task.classList.add("task");
            
            let title = document.createElement("div");
            task.appendChild(title);
            title.innerHTML = "Title: " + Object.values(objectOfToDoObjects)[toDo]._title
            title.classList.add("title")
    
            let description = document.createElement("div");
            task.appendChild(description);
            description.innerHTML = "Description: " + Object.values(objectOfToDoObjects)[toDo]._description
            description.classList.add("description")
    
            let dueDate = document.createElement("div");
            task.appendChild(dueDate);
            dueDate.innerHTML = "DueDate: " + Object.values(objectOfToDoObjects)[toDo]._dueDate
            dueDate.classList.add("due-date")
            
            let priority = document.createElement("div");
            task.appendChild(priority);
            priority.innerHTML = "Priority: " + Object.values(objectOfToDoObjects)[toDo]._priority
            priority.classList.add("priority")
    
    
            let project = document.createElement("div");
            task.appendChild(project);
            project.innerHTML = "Project: " + Object.values(objectOfToDoObjects)[toDo]._project;
            project.classList.add("project")
    
            let deleteMe = document.createElement("button");
            task.appendChild(deleteMe)
            deleteMe.innerHTML = ("Delete me")
            deleteMe.classList.add("delete-me")
    
            deleteMe.addEventListener("click", deleteObject)
            function deleteObject() {
                console.log(objectOfToDoObjects)
                // delete objectOfToDoObjects[toDo];
                objectOfToDoObjects.splice(toDo, 1);
                window.localStorage.setItem("testKey", JSON.stringify(objectOfToDoObjects));
                console.log(objectOfToDoObjects)
                showAllTasks()
            }
        }
        }    
    }
}