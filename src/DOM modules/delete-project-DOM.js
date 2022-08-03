import { UserProjectList } from '../Elements modules/create-project-list.js'

function deleteProject(evt, projectList, projectListDOM) {
    if(evt.target.closest('.delete-project-button')) {
      const projectToDelete = evt.target.parentElement.getAttribute('id') 
      projectList.deleteProjectFromProjectList(projectToDelete)
      projectListDOM.removeChild(evt.target.parentElement)
      const ButtonsList = document.querySelectorAll('.project-button')
      const arr = Array.from(ButtonsList);
      arr.forEach(project => {
        project.id = arr.indexOf(project)
      })
    }
  }

export {deleteProject}