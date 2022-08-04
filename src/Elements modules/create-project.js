class Project {
    constructor (title) {
        this.title = title
        this.todos = []
    }

    addToDoToProject(toDo) {
        this.todos.push(toDo)
    }

    deleteToDoFromProject(toDoIndex) {
        this.todos.splice(toDoIndex, 1)
    }
}

export {Project}