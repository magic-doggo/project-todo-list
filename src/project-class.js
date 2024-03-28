export class project {
    constructor (projectName) {
        this._projectName = projectName
    }

    get projectName(){
        return this._projectName
    }
}