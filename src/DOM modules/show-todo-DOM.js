import Date from '../Icons/calendar-clock.png'
import Trash from '../Icons/delete.png'
import CheckIcon from '../Icons/check-bold.png'

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

export {DisplayToDo}