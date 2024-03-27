import { objectOfToDoObjects } from "./index.js";

const main = document.getElementById("main");

export const showAllTasks = function() {
    let i = 0;
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
        i++;
    }
}