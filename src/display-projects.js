import { projectList } from ".";

export let displayNewProject = function(newProject){
    let i = 0;
    const projectContainer = document.getElementById("projects");
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild);
    }

    let task = document.createElement("div");
        document.getElementById("tasks-container").appendChild(task);
        task.classList.add("task");

    for (let project in projectList) {
        let newProjectType = document.createElement("div");
        projectContainer.appendChild(newProjectType);
        newProjectType.classList.add("project");
        newProjectType.innerHTML = newProject[i].projectName;
        i++;
    }
}