import { objectOfToDoObjects } from ".";
import { removeClass } from "./remove-class";

// let projectNavItem = document.querySelectorAll(".project")

export let addTasksToProject = function () {
    let projectNavItem = document.querySelectorAll(".project")
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
            if (currentProject == Object.values(objectOfToDoObjects)[i].project) { //check if can put code inside in a function, also used in all-tasks.js
                let task = document.createElement("div");
                document.getElementById("tasks-container").appendChild(task);
                task.classList.add("task");
                
                let title = document.createElement("div");
                task.appendChild(title);
                // title.innerHTML = "Title: " + objectOfToDoObjects[i].title;
                title.innerHTML = "Title: " + Object.values(objectOfToDoObjects)[i].title


                let description = document.createElement("div");
                task.appendChild(description);
                // description.innerHTML = "Description: " + objectOfToDoObjects[i].description;
                description.innerHTML = "Description: " + Object.values(objectOfToDoObjects)[i].description

                let dueDate = document.createElement("div");
                task.appendChild(dueDate);
                // dueDate.innerHTML = "Due Date: " + objectOfToDoObjects[i].dueDate;
                dueDate.innerHTML = "DueDate: " + Object.values(objectOfToDoObjects)[i].dueDate

                dueDate.addEventListener("click", deleteObject)
                function deleteObject() {
                    delete objectOfToDoObjects[object];
                    showTasksFromProject()
                }
                
                let priority = document.createElement("div");
                task.appendChild(priority);
                // priority.innerHTML = "Priority: " +  objectOfToDoObjects[i].priority;
                priority.innerHTML = "Priority: " + Object.values(objectOfToDoObjects)[i].priority


                let project = document.createElement("div");
                task.appendChild(project);
                // project.innerHTML = "Project: " + objectOfToDoObjects[i].project;
                project.innerHTML = "Project: " + Object.values(objectOfToDoObjects)[i].project

            }
            i++;
        }
    }
})
}
