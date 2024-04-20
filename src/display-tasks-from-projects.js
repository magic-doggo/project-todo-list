import { objectOfToDoObjects } from ".";
import { removeClass } from "./remove-class";
import { showAllTasks } from "./all-tasks";

export let addTasksToProject = function () {
    let projectNavItem = document.querySelectorAll(".projectName")
    let currentProject;

    projectNavItem.forEach(projectItem => {
    projectItem.addEventListener("click", showTasksFromProject);
    function showTasksFromProject(asd){
        removeClass();
        projectItem.classList.add("selected");
        let i = 0;
        let element = document.getElementById("tasks-container"); //check if element name clashes
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        currentProject = projectItem.innerText
        for (let object in objectOfToDoObjects) {
            if (currentProject == (objectOfToDoObjects)[i]._project) { //check if can put code inside in a function, also used in all-tasks.js
                let task = document.createElement("div");
                document.getElementById("tasks-container").appendChild(task);
                task.classList.add("task");
                
                let title = document.createElement("div");
                task.appendChild(title);
                title.innerHTML = "Title: " + (objectOfToDoObjects)[i]._title

                task.addEventListener("click", toggleDescription)
                function toggleDescription(){
                    let description2 = document.createElement("div");        
                    if (task.childNodes.length == 5){
                        task.appendChild(description2); 
                        description2.innerHTML = "Description: " + (objectOfToDoObjects)[object]._description;
                        description2.classList.add("descriptionClass");
                    }
                    else if (task.childNodes.length > 5) {
                            task.removeChild(task.children[5])
                    }
                }

                let dueDate = document.createElement("div");
                task.appendChild(dueDate);
                dueDate.innerHTML = "DueDate: " + (objectOfToDoObjects)[i]._dueDate
                
                let priority = document.createElement("div");
                task.appendChild(priority);
                priority.innerHTML = "Priority: " + (objectOfToDoObjects)[i]._priority


                let project = document.createElement("div");
                task.appendChild(project);
                project.innerHTML = "Project: " + (objectOfToDoObjects)[i]._project

                let deleteMe = document.createElement("button");
                task.appendChild(deleteMe)
                deleteMe.innerHTML = ("Delete me")
                deleteMe.classList.add("delete-me")
        
                deleteMe.addEventListener("click", deleteObject)
                function deleteObject() {
                    objectOfToDoObjects.splice(object, 1);
                    window.localStorage.setItem("testKey", JSON.stringify(objectOfToDoObjects));
                    showTasksFromProject();
                }
            }
            i++;
        }
    }
})
}
