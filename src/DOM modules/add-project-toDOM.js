import { Project } from '../Elements modules/create-project.js'
import { UserProjectList } from '../Elements modules/create-project-list.js'
import { closeModal } from '../Common functions module/modal-functions.js'
import { DisplayProject } from './show-project-DOM'

function addProjectByName(modal, userProjectList, projectList) {
      const addNewProjectButton = document.querySelector('#NewProject')
      addNewProjectButton.addEventListener('click', () => {
          const projectTitle = document.querySelector('.input-title')
          const project = new Project(`${projectTitle.value}`)
          userProjectList.addProjectToProjectList(project)
          projectList.append(new DisplayProject(project, userProjectList.projects.length-1).displayProjectDOM())
          closeModal(modal)
        }, { once: true })
}


export {addProjectByName}