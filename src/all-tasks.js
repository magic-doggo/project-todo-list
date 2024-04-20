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
        let task = document.createElement("div"); //why did I make this a var??! check after branch is fixed
        document.getElementById("tasks-container").appendChild(task);
        task.classList.add("task");
        
        let title = document.createElement("div");
        task.appendChild(title);
        title.innerHTML = "Title: " + (objectOfToDoObjects)[i]._title
        title.classList.add("title")

        task.addEventListener("click", toggleDescription)
        function toggleDescription(){
            let description2 = document.createElement("div");
            console.log(task.childNodes.length)

            if (task.childNodes.length == 5){
                task.appendChild(description2); 
                console.log((objectOfToDoObjects)[toDo]._description)
                description2.innerHTML = "Description: " + (objectOfToDoObjects)[toDo]._description;
                description2.classList.add("descriptionClass");
                console.log(task.childNodes.length)

            }
            else if (task.childNodes.length > 5) {
                    task.removeChild(task.children[5])
                    console.log(task.childNodes.length)
            }
        }

        let dueDate = document.createElement("div");
        task.appendChild(dueDate);
        dueDate.innerHTML = "DueDate: " + (objectOfToDoObjects)[i]._dueDate
        dueDate.classList.add("due-date")

        let priority = document.createElement("div");
        task.appendChild(priority);
        priority.innerHTML = "Priority: " + (objectOfToDoObjects)[i]._priority
        priority.classList.add("priority")


        let project = document.createElement("div");
        task.appendChild(project);
        project.innerHTML = "Project: " + (objectOfToDoObjects)[i]._project;
        project.classList.add("project")

        let deleteMe = document.createElement("button");
        task.appendChild(deleteMe)
        deleteMe.innerHTML = ("Delete me")
        deleteMe.classList.add("delete-me")

        deleteMe.addEventListener("click", deleteObject)
        function deleteObject() {
            console.log(objectOfToDoObjects)
            // delete objectOfToDoObjects[toDo];
            objectOfToDoObjects.splice(toDo, 1);
            window.localStorage.setItem("testKey", JSON.stringify(objectOfToDoObjects));
            console.log(objectOfToDoObjects)
            showAllTasks()
        }
        i++;
    }
    // return task;
}