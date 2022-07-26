import Checkbox from '../Icons/format-list-checkbox.png'
import Trash from '../Icons/delete.png'

class DisplayProject {
    constructor(project, id) {
        this.project = project
        this.id = id
    }

    displayProjectDOM() {
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

export {DisplayProject}
