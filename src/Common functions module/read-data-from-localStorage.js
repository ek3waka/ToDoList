import { Project } from '../Elements modules/create-project.js'
import { ToDo } from '../Elements modules/create-todo'
import { DisplayProject } from '../DOM modules/show-project-DOM'

function readDataFromJSON(userProjectList, projectList) {
    if (localStorage.todolist == null) {
        let example = new Project('Project1')
        userProjectList.addProjectToProjectList(example)
        projectList.append(new DisplayProject(example, 0).displayProjectDOM())
    
        let todoexample = new ToDo('Do smth', '29.12.22', 'high')
        let todoexample2 = new ToDo('Do smth1', '01.01.23', 'low')
        let todoexample3 = new ToDo('Do smth2', '11.11.23', 'medium')
    
        example.addToDoToProject(todoexample)
        example.addToDoToProject(todoexample2)
        example.addToDoToProject(todoexample3)
        
    } else {
        let userProjectListProjects = JSON.parse(localStorage.todolist)
        for (let i=0; i<userProjectListProjects.projects.length; i++) {
            let project = new Project(userProjectListProjects.projects[i].title)
            for (let j=0; j<userProjectListProjects.projects[i].todos.length; j++) {
              let toDo = new ToDo(
                    userProjectListProjects.projects[i].todos[j].title, 
                    userProjectListProjects.projects[i].todos[j].dueDate,
                    userProjectListProjects.projects[i].todos[j].priority,
                    userProjectListProjects.projects[i].todos[j].done)
              
               project.addToDoToProject(toDo)
            } 
            userProjectList.addProjectToProjectList(project)
        }
        for (let i=0; i < userProjectList.projects.length; i++) {
          projectList.append(new DisplayProject(userProjectList.projects[i], i).displayProjectDOM())
        }
    }
}

export { readDataFromJSON }

