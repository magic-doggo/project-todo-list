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

    for (let project in projectList) {
        let newProjectType = document.createElement("li");
        projectContainer.appendChild(newProjectType);
        newProjectType.classList.add("projectName");
        newProjectType.innerHTML = newProject[i]._projectName;

        let newProjectOption = document.createElement("option");
        projectOptions.appendChild(newProjectOption);
        newProjectOption.innerHTML = newProject[i]._projectName;

        i++;
    }

    addTasksToProject()
}