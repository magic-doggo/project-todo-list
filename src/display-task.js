import { objectOfToDoObjects } from "./index.js";
import { showAllTasks } from "./all-tasks"

export let displayTaskIfRelevant = function (newToDo) {
    let selectedButton = document.getElementsByClassName("selected");
    console.log(selectedButton[0].innerHTML)
    console.log(newToDo.project + "newtodo")
    if (selectedButton[0].innerHTML == "All To-Dos"){
        showAllTasks();
    }
    else if (newToDo.project == selectedButton[0].innerHTML){
        const element = document.getElementById("tasks-container");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }      
        for (let toDo in objectOfToDoObjects) {
            if ((objectOfToDoObjects)[toDo]._project == selectedButton[0].innerHTML) {
            let task = document.createElement("div");
            document.getElementById("tasks-container").appendChild(task);
            task.classList.add("task");
            
            let title = document.createElement("div");
            task.appendChild(title);
            title.innerHTML = "Title: " + (objectOfToDoObjects)[toDo]._title
            title.classList.add("title")
    
            task.addEventListener("click", toggleDescription)
            function toggleDescription(){
                let description2 = document.createElement("div");    
                if (task.childNodes.length == 5){
                    task.appendChild(description2); 
                    description2.innerHTML = "Description: " + (objectOfToDoObjects)[toDo]._description;
                    description2.classList.add("descriptionClass");
    
                }
                else if (task.childNodes.length > 5) {
                        task.removeChild(task.children[5])
                }
            }

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
                objectOfToDoObjects.splice(toDo, 1);
                window.localStorage.setItem("testKey", JSON.stringify(objectOfToDoObjects));
                displayTaskIfRelevant(newToDo);
            }
        }
        }    
    }
}