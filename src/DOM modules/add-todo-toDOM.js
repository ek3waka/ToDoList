import { ToDo } from '../Elements modules/create-todo.js'
import { closeModal } from '../Common functions module/modal-functions.js'
import { normalizeDate } from '../Common functions module/data-functions'
import { DisplayToDo } from './show-todo-DOM'
import { Project } from '../Elements modules/create-project.js'

function addToDoByName(modal, targetProject) {
    const addNewToDoButton = document.querySelector('#NewToDo')
    
    addNewToDoButton.addEventListener('click', () => {
        console.log(targetProject)
        const todoContainer = document.querySelector('.todo-container')
        const ToDoTitle = document.querySelector('input[placeholder="ToDo Title"]')
        const ToDoDueDate = document.querySelector('.todo-date-input')
        const ToDoPriority = document.querySelector('input[name="priority"]:checked')
        
        const todo = new ToDo(`${ToDoTitle.value}`, `${normalizeDate(ToDoDueDate.value)}`, `${ToDoPriority.value}`)
        
        targetProject.addToDoToProject(todo)
  
        todoContainer.append(new DisplayToDo().DOM(todo, targetProject.todos.length - 1))
  
        closeModal(modal)
    }, { once: true })
  }

  export {addToDoByName}