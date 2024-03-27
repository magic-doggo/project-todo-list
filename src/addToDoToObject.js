let id = 0
let AddToObject = function (object, objectOfToDoObjects){
    // let toDoArray = Object.values(object)
    // let newTaskDiv = document.createElement("div")
    // let toDoTitle = document.createElement("div")
    objectOfToDoObjects[id] = object
    id++;

}

export { AddToObject }
//next make a way to display each todo on the page
