import { objectOfToDoObjects } from "./index.js";

const main = document.getElementById("main");

export const showAllTasks = function() {
    let i = 0;
    let currentProject = "unclassified" //will be useful once I implement other projects. or not here, this should show all tasks regardless of proj
    const element = document.getElementById("tasks-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    } //clear the todos before requesting full list

    for (let toDo in objectOfToDoObjects) {
        // console.log(toDo + "to do")
        console.log(objectOfToDoObjects + "" + i)
        let task = document.createElement("div");
        document.getElementById("tasks-container").appendChild(task);
        task.classList.add("task");
        
        let title = document.createElement("div");
        task.appendChild(title);
        console.log(i);
        // title.innerHTML = "Title: " + objectOfToDoObjects[i].title;
        title.innerHTML = "Title: " + Object.values(objectOfToDoObjects)[i].title
        // title.innerHTML = objectOfToDoObjects[Object.keys(objectOfToDoObjects)[0].title]

        let description = document.createElement("div");
        task.appendChild(description);
        description.innerHTML = "Description: " + Object.values(objectOfToDoObjects)[i].description
        // description.innerHTML = "Description: " + objectOfToDoObjects[i].description;

        let dueDate = document.createElement("div");
        task.appendChild(dueDate);
        // dueDate.innerHTML = "Due Date: " + objectOfToDoObjects[i].dueDate;
        dueDate.innerHTML = "DueDate: " + Object.values(objectOfToDoObjects)[i].dueDate


        dueDate.addEventListener("click", deleteObject)
        function deleteObject() {
            // console.log(objectOfToDoObjects)
            delete objectOfToDoObjects[toDo];
            // console.log(objectOfToDoObjects)
            showAllTasks()
            // const {i, ...rest } = objectOfToDoObjects
            // console.log(rest);
        }
        
        let priority = document.createElement("div");
        task.appendChild(priority);
        // priority.innerHTML = "Priority: " + objectOfToDoObjects[i].priority;
        priority.innerHTML = "Priority: " + Object.values(objectOfToDoObjects)[i].priority


        let project = document.createElement("div");
        task.appendChild(project);
        project.innerHTML = "Project: " + Object.values(objectOfToDoObjects)[i].project;

//CONTINUE ADDING THE REST OF THE ELEMENTS. THEN FIND A WAY TO MAKE IT SHOW WHEN YOU CLICK NEW-TODO. THINK WHETHER YOU ACTUALLY WANT ALL THIS
//ON SAME PAGE OR NOT. DO I WANT DIFFERENT PAGE FOR ALL TASKS VS SEPARATE PROJECTS?

//when confirm new todo, if container has any kids and same project, add todo to dom. maybe set a variable that changes depending if last clicked was a project or undefined
//add completed projecct. when press on task complete, it goes there. when press on delete, it is just deleted? or add deleted project - no don't add deleter project


        i++;
    }
}