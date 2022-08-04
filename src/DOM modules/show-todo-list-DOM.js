import { toggleTodoCheck } from "./toggle-todo-check"
import { deleteTodo } from './delete-todo-DOM'
import { CreateProjectContainer } from './show-project-list-DOM'
import { openModal, closeModal } from '../Common functions module/modal-functions'
import { addToDoByName } from './add-todo-toDOM'
import { DisplayToDo } from './show-todo-DOM'

function showTodoList(evt, main, userProjectList) {
    if(evt.target.closest('.project-button :not(.add-project-button)')) {
        if (document.querySelector('.project-container')) {
          main.removeChild(document.querySelector('.project-container'))
        }
        const targetProject = userProjectList.projects[evt.target.closest('.project-button').getAttribute('id')]
        let showProject =  new CreateProjectContainer()
        let showProjectContainer = showProject.createprojectContainer(targetProject)
        let showToDos = showProject.createtoDoContainer(targetProject)
        main.append(showProjectContainer)
        for (let i=0; i < targetProject.todos.length; i++) {
          let showtodoexample = new DisplayToDo().DOM(targetProject.todos[i], i)
          showToDos.append(showtodoexample)
        }
        showProjectContainer.append(showToDos)
    
    //toggle check
        showProjectContainer.addEventListener('click', (evt) => toggleTodoCheck(evt, targetProject))
    //delete todo
        showProjectContainer.addEventListener('click', (evt) => deleteTodo(evt, targetProject))
    
        const openAddToDo = document.querySelector('#ToDo')
        
        openAddToDo.addEventListener('click', () => {
          const modal = document.querySelector('#addToDoCard')
          openModal(modal)
          addToDoByName(modal, targetProject) 
        })
      }
}


export {showTodoList}