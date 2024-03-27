import { objectOfToDoObjects } from "./index.js";

let i = 0;

const main = document.getElementById("main");

export const showAllTasks = function() {
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