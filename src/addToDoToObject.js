let id = 0
let AddToObject = function (object, objectOfObjects){
    // let toDoArray = Object.values(object)
    // let newTaskDiv = document.createElement("div")
    // let toDoTitle = document.createElement("div")
    objectOfObjects[id] = object
    id++;

}

export { AddToObject }