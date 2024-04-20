import { objectOfToDoObjects } from "./index.js";
import { showAllTasks } from "./all-tasks"

export let displayTaskIfRelevant = function (newToDo) {
    let selectedButton = document.getElementsByClassName("selected");

    // if (newToDo.project == selectedButton[0].innerHTML || selectedButton[0].innerHTML == "All To-Dos" || ("Project: " + newToDo.project) == (tasksContainer.firstChild.lastChild.innerText)) { //maybe also show if last child is unclassified
    if (selectedButton[0].innerHTML == "All To-Dos"){
        showAllTasks();
    }
    else if (newToDo.project == selectedButton[0].innerHTML){
        console.log(newToDo.project + "newtodo")
        const element = document.getElementById("tasks-container");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }      
        for (let toDo in objectOfToDoObjects) {
            console.log(toDo)
            if ((objectOfToDoObjects)[toDo].project == selectedButton[0].innerHTML) {
            let task = document.createElement("div");
            document.getElementById("tasks-container").appendChild(task);
            task.classList.add("task");
            console.log(toDo)
            
            let title = document.createElement("div");
            task.appendChild(title);
            title.innerHTML = "Title: " + (objectOfToDoObjects)[toDo]._title
            title.classList.add("title")
    
            let description = document.createElement("div");
            task.appendChild(description);
            description.innerHTML = "Description: " + (objectOfToDoObjects)[toDo]._description
            description.classList.add("description")
    
            let dueDate = document.createElement("div");
            task.appendChild(dueDate);
            dueDate.innerHTML = "DueDate: " + (objectOfToDoObjects)[toDo]._dueDate
            dueDate.classList.add("due-date")
            
            let priority = document.createElement("div");
            task.appendChild(priority);
            priority.innerHTML = "Priority: " + (objectOfToDoObjects)[toDo]._priority
            priority.classList.add("priority")
    
    
            let project = document.createElement("div");
            task.appendChild(project);
            project.innerHTML = "Project: " + (objectOfToDoObjects)[toDo]._project;
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
                console.log(objectOfToDoObjects);
                displayTaskIfRelevant(newToDo);
                // showAllTasks()
            }
        }
        }    
    }
}