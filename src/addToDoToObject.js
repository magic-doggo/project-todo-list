let id = 0
let AddToObject = function (object, objectOfToDoObjects){
    objectOfToDoObjects[id] = object
    id++;
}

export { AddToObject }
