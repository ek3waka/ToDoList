import Cog from './Icons/cog.png'
import Menu from './Icons/menu.png'
import './style.css'


import { UserProjectList } from './Elements modules/create-project-list.js'
import { Project } from './Elements modules/create-project.js'
import { ToDo } from './Elements modules/create-todo'
import { openModal, closeModal } from './Common functions module/modal-functions.js'
import { CreateModal, CreateTodoMenu, CreateProjectMenu} from './DOM modules/show-modals-DOM'
import { DisplayProject } from './DOM modules/show-project-DOM'
import { CreateAddButton } from './DOM modules/show-common-components-DOM'
import { deleteProject } from './DOM modules/delete-project-DOM'
import { showTodoList } from './DOM modules/show-todo-list-DOM'
import { addProjectByName } from './DOM modules/add-project-toDOM'
import { addToDoByName } from './DOM modules/add-todo-toDOM'
import { toggleTodoCheck } from './DOM modules/toggle-todo-check'
import { deleteTodo } from './DOM modules/delete-todo-DOM'


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

menuBtn.addEventListener('click', () => {
  projectList.classList.toggle('hidden')
})

const userProjectList = new UserProjectList()

/////////////////
let example = new Project('Project1')
userProjectList.addProjectToProjectList(example)
projectList.append(new DisplayProject(example, 0).displayProjectDOM())

console.log(userProjectList)
let addProjectButton = new CreateAddButton()
projectList.append(addProjectButton.createAddButton('Project'))

let todoexample = new ToDo('Do smth', '29.01.12', 'high')
let todoexample2 = new ToDo('todoexample2', '01.01.42', 'low')
let todoexample3 = new ToDo('todoexample3', '11.11.23', 'medium')

example.addToDoToProject(todoexample)
example.addToDoToProject(todoexample2)
example.addToDoToProject(todoexample3)

/////////////////////
///add project and todo modal
let addProject = new CreateProjectMenu('Project')
let card = addProject.createMenu()
let input = addProject.createProjectMenu()

card.append(input)


const overlay = addProject.createOverlay()
body.append(overlay)

let addToDo = new CreateTodoMenu('ToDo')
let cardToDo = addToDo.createMenu()
let inputToDo = addToDo.createTodoMenu()
cardToDo.append(inputToDo)


wrapper.append(card)
wrapper.append(cardToDo)
///////////////////////////////

const openAddProject = document.querySelector('#Project')
const openAddToDo = document.querySelector('#ToDo')
const closeModalButtons = document.querySelectorAll('#closeModal')

openAddProject.addEventListener('click', () => {
    const modal = document.querySelector('#addProjectCard')
    openModal(modal)
    addProjectByName(modal, userProjectList, projectList) 
})

projectList.addEventListener('click', (evt) => deleteProject(evt, userProjectList, projectList)) 
/////////////////////////

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

projectList.addEventListener('click',(evt) => showTodoList(evt, main, userProjectList))