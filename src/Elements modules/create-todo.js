class ToDo {
    constructor(title, dueDate, priority, done = false) {
        this.title = title
        this.dueDate = dueDate
        this.priority = priority
        this.done = done
    }
    changeDone() {
        this.done = !this.done
    }
    getDone() {
        return this.done
    }
}

export {ToDo}