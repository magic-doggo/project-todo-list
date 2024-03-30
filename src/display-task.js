export let displayTaskIfRelevant = function (newToDo, tasksContainer) {
    if ( tasksContainer.firstChild == null || newToDo.project == tasksContainer.firstChild.lastChild.innerText) { //maybe also show if last child is unclassified
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
        dueDate.innerHTML = "Due Date: " + newToDo.dueDate;
        
        let priority = document.createElement("div");
        task.appendChild(priority);
        priority.innerHTML = "Priority: " + newToDo.priority;

        let project = document.createElement("div");
        task.appendChild(project);
        project.innerHTML = "Project: " + newToDo.project;
    }
}