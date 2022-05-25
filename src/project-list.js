import Checkbox from './format-list-checkbox.png'
import Trash from './delete.png'
import Plus from './plus-thick.png'



let projectArray = []

class Project {
    constructor (title) {
        this.title = title
        let todos = []
    }
}

class DisplayProject {
    constructor(project) {
        this.project = project
    }
    showProjectDOM() {
        const projectButton = document.createElement('button')
        projectButton.classList.add('project-button')

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
    createAddButton() {
        const addProjectButton = document.createElement('button')
        addProjectButton.classList.add('project-button', 'add-project-button')

        const addProjectIcon = document.createElement('img')
        addProjectIcon.classList.add('project-icon')
        addProjectIcon.src = Plus
        
        const addProjectTitle = document.createElement('p')
        addProjectTitle.classList.add('project-name')
        addProjectTitle.textContent = 'Add Project'

        addProjectButton.append(addProjectIcon, addProjectTitle)

        return addProjectButton
    }
}


export {Project, DisplayProject, CreateAddButton}
