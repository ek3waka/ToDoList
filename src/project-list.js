import Checkbox from './format-list-checkbox.png'
import Trash from './delete.png'
import Plus from './plus-thick.png'

class UserProjectList {
    constructor () {
        this.projects = []
    }
    
    addProjectToProjectList(project) {
        this.projects.push(project)
    }
    deleteProjectFromProjectList(projectIndex) {
        this.projects.splice(projectIndex, 1)
    }
}

let projectArray = []

class Project {
    constructor (title) {
        this.title = title
        this.todos = []
    }
    addToDoToProject(toDo) {
        this.todos.push(toDo)
    }
    
}



class DisplayProject {
    constructor(project, id) {
        this.project = project
        this.id = id
    }
    showProjectDOM() {
        const projectButton = document.createElement('button')
        projectButton.classList.add('project-button')
        projectButton.id = this.id


        const projectIcon = document.createElement('img')
        projectIcon.classList.add('project-icon')
        projectIcon.src = Checkbox
        
        const projectTitle = document.createElement('p')
        projectTitle.classList.add('project-name')
        projectTitle.textContent = this.project.title

        const deleteProject = document.createElement('img')
        deleteProject.classList.add('project-icon', 'delete-project-button')
        deleteProject.src = Trash
        projectButton.append(projectIcon, projectTitle, deleteProject)
        return projectButton
    }
}

class CreateAddButton {
    createAddButton(whatToCreate) {
        const addButton = document.createElement('button')
        addButton.classList.add('project-button', 'add-project-button')
        addButton.id = whatToCreate

        const addIcon = document.createElement('img')
        addIcon.classList.add('project-icon')
        addIcon.src = Plus
        
        const addTitle = document.createElement('p')
        addTitle.classList.add('project-name')
        addTitle.textContent = `Add ${whatToCreate}`

        addButton.append(addIcon, addTitle)

        return addButton
    }
}

//закинуть бы создание общих компонентов куда-нибудь в другой модуль, ыыыы


export {UserProjectList, Project, DisplayProject, CreateAddButton}
