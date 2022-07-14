import Date from './calendar-clock.png'
import Trash from './delete.png'
import CheckIcon from './check-bold.png'
import { CreateAddButton } from './project-list'


class ToDo {
    constructor(title, dueDate, priority) {
        this.title = title
        this.dueDate = dueDate
        this.priority = priority
        this.done = false
    }
    changeDone() {
        this.done = !this.done
    }
}


class DisplayToDo {
    DOM(todo, id) {
        const toDoItem = document.createElement('div')
        toDoItem.classList.add('todo-item')
        toDoItem.id = id
        
        const check = document.createElement('button')
        check.classList.add('check-todo-item')
        
        if (todo.done === true) {
            const checked = document.createElement('img')
            checked.classList.add('project-icon')
            checked.src = CheckIcon
            check.append(checked)
        }


        const toDoText = document.createElement('p')
        toDoText.classList.add('todo-text')
        toDoText.textContent = todo.title

        const dateIcon = document.createElement('img')
        dateIcon.src = Date
        dateIcon.classList.add('project-icon')

        switch (todo.priority) {
            case 'low': 
                toDoItem.style.borderLeft = '0.5rem solid green'
                break
            
            case 'high': 
                toDoItem.style.borderLeft = '0.5rem solid crimson'
                break
            
            default: 
                toDoItem.style.borderLeft = '0.5rem solid yellow'
                
        }

        const dueDateText = document.createElement('p')
        dueDateText.classList.add('due-date')
        dueDateText.textContent = todo.dueDate

        const deleteToDo = document.createElement('img')
        deleteToDo.classList.add('project-icon', 'delete-project-button')
        deleteToDo.src = Trash

        toDoItem.append(check, toDoText, dateIcon, dueDateText, deleteToDo)



        return toDoItem
    }

}

class CreateProjectContainer {
    createprojectContainer(project) {
        const projectContainer = document.createElement('div')
        projectContainer.classList.add('project-container')

        const projectTitle = document.createElement('div')
        projectTitle.classList.add('project-title')
        projectTitle.textContent = project.title

        const addToDo = new CreateAddButton

        const addToDoButton = addToDo.createAddButton('ToDo')
        

        projectContainer.append(projectTitle, addToDoButton)


        return projectContainer
    }


    createtoDoContainer() {
        const toDoContainer = document.createElement('div')
        toDoContainer.classList.add('todo-container')
        return toDoContainer
    }
    
    

}

export {ToDo, DisplayToDo, CreateProjectContainer}
