export let displayTaskIfRelevant = function (newToDo, tasksContainer) {
    // console.log(newToDo.project)
    // console.log("Project: " + tasksContainer.firstChild.lastChild.innerText)
    // console.log(tasksContainer.firstChild)
    let selectedButton = document.getElementsByClassName("selected")
if (newToDo.project == selectedButton[0].innerHTML || selectedButton[0].innerHTML == "All To-Dos" || ("Project: " + newToDo.project) == (tasksContainer.firstChild.lastChild.innerText)) { //maybe also show if last child is unclassified
        let task = document.createElement("div");
        document.getElementById("tasks-container").appendChild(task);
        task.classList.add("task");
        
        let title = document.createElement("div");
        task.appendChild(title);
        title.innerHTML = "Title: " + newToDo.title;

        let description = document.createElement("div");
        task.appendChild(description);
        description.innerHTML = "Description: " + newToDo.description;

        let dueDate = document.createElement("div");
        task.appendChild(dueDate);
        dueDate.innerHTML = "DueDate: " + newToDo.dueDate;
        
        let priority = document.createElement("div");
        task.appendChild(priority);
        priority.innerHTML = "Priority: " + newToDo.priority;

        let project = document.createElement("div");
        task.appendChild(project);
        project.innerHTML = "Project: " + newToDo.project;
    }
}