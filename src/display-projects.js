import { projectList } from ".";
import { project } from "./project-class";
import { addTasksToProject } from "./display-tasks-from-projects";
let projectNavItem = document.querySelectorAll(".project")


export let displayNewProject = function(newProject){
    let i = 0;
    const projectContainer = document.getElementById("projects");
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild);
    }
    const projectOptions = document.getElementById("project");
    while (projectOptions.childNodes.length > 1){
        projectOptions.removeChild(projectOptions.lastChild)
    }

    // let task = document.createElement("div");
    //     document.getElementById("tasks-container").appendChild(task);
    //     task.classList.add("task");

    for (let project in projectList) {
        let newProjectType = document.createElement("li");
        projectContainer.appendChild(newProjectType);
        newProjectType.classList.add("project");
        newProjectType.innerHTML = newProject[i]._projectName;

        let newProjectOption = document.createElement("option");
        projectOptions.appendChild(newProjectOption);
        newProjectOption.innerHTML = newProject[i]._projectName;

        i++;
    }

    addTasksToProject()
}