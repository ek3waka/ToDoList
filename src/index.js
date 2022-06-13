import Cog from './cog.png'
import Menu from './menu.png'
import './style.css'
import {Project, DisplayProject, CreateAddButton} from './project-list'
import {CreateCard, CreateProjectMenu, CreateTodoMenu} from './create-card'
import {ToDo, DisplayToDo, CreateProjectContainer} from './project-card'


const body = document.querySelector('body')

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

body.append(wrapper)


//create header
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

let example = new Project('Example')
projectList.append(new DisplayProject(example).showProjectDOM())


example.addToDoToProject(1)
example.addToDoToProject(2)
example.addToDoToProject(3)

console.log(example)

let example2 = new Project('Example2')
projectList.append(new DisplayProject(example2).showProjectDOM())

let addProjectButton = new CreateAddButton()
projectList.append(addProjectButton.createAddButton('Project'))



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




document.querySelector('.add-project-button').addEventListener('click', () => {
    let addProject = new CreateProjectMenu('Project')
    let card = addProject.createMenu()
    let input = addProject.createProjectMenu()
    card.append(input)
    wrapper.append(card)
    const overlay = addProject.createOverlay()
    overlay.classList.add('active')
    body.append(overlay)
    
})


let todoexample = new ToDo('Do smth', '29.01.12', 'highest')
let todoexample2 = new ToDo('todoexample2', '01.01.42', 'lowest')
let todoexample3 = new ToDo('todoexample3', '11.11.23', 'medium')

example.addToDoToProject(todoexample)
example.addToDoToProject(todoexample2)
example.addToDoToProject(todoexample3)




let showtodoexample = new DisplayToDo().DOM(todoexample)
let showtodoexample2 = new DisplayToDo().DOM(todoexample2)
let showtodoexample3 = new DisplayToDo().DOM(todoexample3)


let showProject =  new CreateProjectContainer()
let showProjectContainer = showProject.createprojectContainer(example)

let showToDos = showProject.createtoDoContainer() 

showToDos.append(showtodoexample, showtodoexample2, showtodoexample3)

showProjectContainer.append(showToDos)

main.append(showProjectContainer)





menuBtn.addEventListener('click', () => {
    projectList.classList.toggle('hidden')
})



/* const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
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
  modal.classList.remove('active')
  overlay.classList.remove('active')
} */