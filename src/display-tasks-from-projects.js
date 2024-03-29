import { objectOfToDoObjects } from ".";
// let projectNavItem = document.querySelectorAll(".project")

export let addTasksToProject = function () {
    let projectNavItem = document.querySelectorAll(".project")
    let currentProject;

    projectNavItem.forEach(projectItem => {
    projectItem.addEventListener("click", showTasksFromProject);
    function showTasksFromProject(asd){
        let i = 0;
        let element = document.getElementById("tasks-container"); //check if element name clashes
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        currentProject = projectItem.innerText

        for (let object in objectOfToDoObjects) {
            if (currentProject == objectOfToDoObjects[i].project) { //check if can put code inside in a function, also used in all-tasks.js
                let task = document.createElement("div");
                document.getElementById("tasks-container").appendChild(task);
                task.classList.add("task");
                
                let title = document.createElement("div");
                task.appendChild(title);
                title.innerHTML = objectOfToDoObjects[i].title;

                let description = document.createElement("div");
                task.appendChild(description);
                description.innerHTML = objectOfToDoObjects[i].description;

                let dueDate = document.createElement("div");
                task.appendChild(dueDate);
                dueDate.innerHTML = objectOfToDoObjects[i].dueDate;
                
                let priority = document.createElement("div");
                task.appendChild(priority);
                priority.innerHTML = objectOfToDoObjects[i].priority;

                let project = document.createElement("div");
                task.appendChild(project);
                project.innerHTML = objectOfToDoObjects[i].project;
            }
            i++;
        }
    }
})
}