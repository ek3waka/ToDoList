import { CreateAddButton } from './show-common-components-DOM.js'

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

export {CreateProjectContainer}
