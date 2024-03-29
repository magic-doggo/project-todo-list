export let displayTaskIfRelevant = function (newToDo, tasksContainer) {
    if ( tasksContainer.firstChild == null || newToDo.project == tasksContainer.firstChild.lastChild.innerText) {
        let task = document.createElement("div");
        document.getElementById("tasks-container").appendChild(task);
        task.classList.add("task");
        
        let title = document.createElement("div");
        task.appendChild(title);
        title.innerHTML = newToDo.title;

        let description = document.createElement("div");
        task.appendChild(description);
        description.innerHTML = newToDo.description;

        let dueDate = document.createElement("div");
        task.appendChild(dueDate);
        dueDate.innerHTML = newToDo.dueDate;
        
        let priority = document.createElement("div");
        task.appendChild(priority);
        priority.innerHTML = newToDo.priority;

        let project = document.createElement("div");
        task.appendChild(project);
        project.innerHTML = newToDo.project;
    }
}