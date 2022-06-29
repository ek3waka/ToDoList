import Cog from './cog.png'
import Menu from './menu.png'
import './style.css'
import {UserProjectList, Project, DisplayProject, CreateAddButton, ProjectList} from './project-list'
import {CreateCard, CreateProjectMenu, CreateTodoMenu} from './create-card'
import {ToDo, DisplayToDo, CreateProjectContainer} from './project-card'


const body = document.querySelector('body')

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

body.append(wrapper)

const header = document.createElement('header')
wrapper.appendChild(header)

const main = document.createElement('main')

const menuBtn = document.createElement('button')
const title = document.createElement('div')
const settingsBtn = document.createElement('button')

const menuBtnIcon = document.createElement('img')
menuBtnIcon.src = Menu
menuBtnIcon.classList.add('header-icon')

menuBtn.append(menuBtnIcon)
title.textContent = 'ToDoList'

const settingsBtnIcon = document.createElement('img')
settingsBtnIcon.src = Cog
settingsBtnIcon.classList.add('header-icon')
settingsBtn.append(settingsBtnIcon)

header.append(menuBtn, title, settingsBtn)

const projectList = document.createElement('div')
projectList.classList.add('project-list')
const projectListTitle = document.createElement('h1')
projectListTitle.textContent = 'Projects'
projectList.append(projectListTitle)

main.append(projectList)

const footer = document.createElement('footer')
const legalInfo = document.createElement('div')
legalInfo.classList.add('legal-info')
const siteName = document.createElement('div')
const copyRight = document.createElement('div')
siteName.textContent = `JijaRare Inc., 2022`
copyRight.textContent = 'All rights reserved'
legalInfo.append(siteName, copyRight)
footer.appendChild(legalInfo)
wrapper.append(main, footer)















const userProjectList = new UserProjectList()



let example = new Project('Project1')
projectList.append(new DisplayProject(example, 0).showProjectDOM())

let example2 = new Project('Example2')
projectList.append(new DisplayProject(example2, 1).showProjectDOM())

let addProjectButton = new CreateAddButton()
projectList.append(addProjectButton.createAddButton('Project'))


/////////////////////
///add project and todo modal
let addProject = new CreateProjectMenu('Project')
let card = addProject.createMenu()
let input = addProject.createProjectMenu()

card.append(input)
wrapper.append(card)
const overlay = addProject.createOverlay()
body.append(overlay)

let addToDo = new CreateTodoMenu('ToDo')
let cardToDo = addToDo.createMenu()
let inputToDo = addToDo.createTodoMenu()
cardToDo.append(inputToDo)
///////////////////////////////



const openAddProject = document.querySelector('#Project')
const openAddToDo = document.querySelector('#ToDo')
const closeModalButtons = document.querySelectorAll('#closeModal')



openAddProject.addEventListener('click', () => {
    const modal = document.querySelector('#addProjectCard')
    openModal(modal)
    addProjectByName(modal) 
  })


function addProjectByName(modal) {
  const addNewProjectButton = document.querySelector('#NewProject')

  addNewProjectButton.addEventListener('click', () => {
      const projectTitle = document.querySelector('.input-title')
      const project = new Project(`${projectTitle.value}`)
      userProjectList.addProjectToProjectList(project)
      projectList.append(new DisplayProject(project, userProjectList.projects.length-1).showProjectDOM())
      closeModal(modal)
    }, { once: true })
}


projectList.addEventListener('click', function(evt) {
  if(evt.target.closest('.delete-project-button')) {
    const projectToDelete = evt.target.getAttribute('id')
    console.log(projectToDelete)
    userProjectList.deleteProjectFromProjectList(projectToDelete)
    console.log(userProjectList)
    projectList.removeChild(evt.target.parentElement)
    const ButtonsList = document.querySelectorAll('#Project ~ .project-button')
    const arr = Array.from(ButtonsList);
    arr.forEach(project => {
      project.id = arr.indexOf(project)
    })
    }
    })



//где-то внутри проекта должно быть
/* openAddToDo.addEventListener('click', () => {
    const modal = document.querySelector('#addToDoCard')
    openModal(modal)
  })
 */
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.create-card.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.create-card')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  const projectTitle = document.querySelector('.input-title')
  projectTitle.value = ''
  modal.classList.remove('active')
  overlay.classList.remove('active')
}







let todoexample = new ToDo('Do smth', '29.01.12', 'highest')
let todoexample2 = new ToDo('todoexample2', '01.01.42', 'lowest')
let todoexample3 = new ToDo('todoexample3', '11.11.23', 'medium')

example.addToDoToProject(todoexample)
example.addToDoToProject(todoexample2)
example.addToDoToProject(todoexample3)


let todoexample4 = new ToDo('1', '01.01.23', 'medium')
let todoexample5 = new ToDo('todoexample2323', '01.01.23', 'medium')
let todoexample6 = new ToDo('todoexample3213231', '01.01.23', 'medium')

example2.addToDoToProject(todoexample4)
example2.addToDoToProject(todoexample5)
example2.addToDoToProject(todoexample6)

userProjectList.addProjectToProjectList(example)
userProjectList.addProjectToProjectList(example2)



projectList.addEventListener('click', function(evt) {
  if(evt.target.closest('.project-button')) {
    if (document.querySelector('.project-container')) {
      main.removeChild(document.querySelector('.project-container'))
    }
    const targetProject = userProjectList.projects[evt.target.closest('.project-button').getAttribute('id')]
    console.log(targetProject.todos)
    let showProject =  new CreateProjectContainer()
    let showProjectContainer = showProject.createprojectContainer(targetProject)
    let showToDos = showProject.createtoDoContainer(targetProject)
    main.append(showProjectContainer)
    for (let i=0; i < targetProject.todos.length; i++) {
      let showtodoexample = new DisplayToDo().DOM(targetProject.todos[i])
      showToDos.append(showtodoexample)
    }
    showProjectContainer.append(showToDos)
    
    }
    })





/* let showtodoexample = new DisplayToDo().DOM(todoexample)
let showtodoexample2 = new DisplayToDo().DOM(todoexample2)
let showtodoexample3 = new DisplayToDo().DOM(todoexample3)
 */

/* let showProject =  new CreateProjectContainer()
let showProjectContainer = showProject.createprojectContainer(example)

let showToDos = showProject.createtoDoContainer()  */


/* showProjectContainer.addEventListener('click', function(evt) {
  if(evt.target.closest('.check-todo-item')) {
    let todo = evt.target.parentElement
    evt.target.insertAdjacentHTML('afterbegin', '&#10004;');
    console.log('1')
    }
  })
 */
/* showToDos.append(showtodoexample, showtodoexample2, showtodoexample3)

showProjectContainer.append(showToDos)
 */
/* main.append(showProjectContainer) */

menuBtn.addEventListener('click', () => {
    projectList.classList.toggle('hidden')
})
