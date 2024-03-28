import { objectOfToDoObjects } from "./index.js";

const main = document.getElementById("main");

export const showAllTasks = function() {
    let i = 0;
    let currentProject = "unclassified" //will be useful once I implement other projects
    const element = document.getElementById("tasks-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    } //clear the todos before requesting full list

    for (let toDo in objectOfToDoObjects) {
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

//CONTINUE ADDING THE REST OF THE ELEMENTS. THEN FIND A WAY TO MAKE IT SHOW WHEN YOU CLICK NEW-TODO. THINK WHETHER YOU ACTUALLY WANT ALL THIS
//ON SAME PAGE OR NOT. DO I WANT DIFFERENT PAGE FOR ALL TASKS VS SEPARATE PROJECTS?

//when confirm new todo, if container has any kids and same project, add todo to dom. maybe set a variable that changes depending if last clicked was a project or undefined
//add completed projecct. when press on task complete, it goes there. when press on delete, it is just deleted? or add deleted project
        i++;
    }
}