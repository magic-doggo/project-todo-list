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
        var task = document.createElement("div"); //why did I make this a var??! check after branch is fixed
        document.getElementById("tasks-container").appendChild(task);
        task.classList.add("task");
        
        let title = document.createElement("div");
        task.appendChild(title);
        title.innerHTML = "Title: " + Object.values(objectOfToDoObjects)[i]._title
        title.classList.add("title")
        // task.addEventListener("click", toggleDescription)
        // function toggleDescription(){
        //     let description2 = document.createElement("div");
        //     console.log(task.childNodes.length)
        //     // console.log(Object.values(objectOfToDoObjects)[0]._description);
        //     // description.innerText = "Description: " + Object.values(objectOfToDoObjects)[0].description;

        //     if (task.childNodes.length == 5){
        //         // let description = document.createElement("div");
        //         task.appendChild(description2);
        //         // console.log(Object.values(objectOfToDoObjects)[0].description)
        //         // description2.innerHtml = "Description: " + Object.values(objectOfToDoObjects)[0]._description;
        //         description2.innerHtml = "Description: "
        //         description2.classList.add("descriptionClass");

        //     }
        //     else if (task.childNodes.length > 5) {
        //             task.removeChild(description2)
        //     }
        // }

        // let description = document.createElement("div");
        // task.appendChild(description);
        // description.innerHTML = "Description: " + Object.values(objectOfToDoObjects)[i].description
        // // description.innerHTML = "Description: " + objectOfToDoObjects[i].description;
        // description.classList.add("description")
        let description = document.createElement("div");
        task.appendChild(description);
        description.innerHTML = "Description: " + Object.values(objectOfToDoObjects)[i]._description
        description.classList.add("description")

        let dueDate = document.createElement("div");
        task.appendChild(dueDate);
        dueDate.innerHTML = "DueDate: " + Object.values(objectOfToDoObjects)[i]._dueDate
        dueDate.classList.add("due-date")

        let priority = document.createElement("div");
        task.appendChild(priority);
        priority.innerHTML = "Priority: " + Object.values(objectOfToDoObjects)[i]._priority
        priority.classList.add("priority")


        let project = document.createElement("div");
        task.appendChild(project);
        project.innerHTML = "Project: " + Object.values(objectOfToDoObjects)[i]._project;
        project.classList.add("project")

        let deleteMe = document.createElement("button");
        task.appendChild(deleteMe)
        deleteMe.innerHTML = ("Delete me")
        deleteMe.classList.add("delete-me")

        deleteMe.addEventListener("click", deleteObject)
        function deleteObject() {
            delete objectOfToDoObjects[toDo];
            showAllTasks()
        }
        i++;
    }
    return task;
}