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




export {UserProjectList}