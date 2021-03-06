import Cog from './cog.png'
import Menu from './menu.png'
import Check from './check-bold.png' //delete later when remove to module
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
wrapper.append(cardToDo)
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
  const titles = document.querySelectorAll('.input-title')
  titles.forEach(title => {
    title.value = ''
  })
  const date = document.querySelector('.todo-date-input')
  const priorityMedium = document.querySelector('input[value="medium"]')
  date.value = `${getDate()}`
  priorityMedium.checked = true
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


function getDate() {
    let now = new Date()
    let day = ("0" + now.getDate()).slice(-2)
    let month = ("0" + (now.getMonth() + 1)).slice(-2)
    return now.getFullYear() + "-" + (month) + "-" + (day)
}



let todoexample = new ToDo('Do smth', '29.01.12', 'high')
let todoexample2 = new ToDo('todoexample2', '01.01.42', 'low')
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
  if(evt.target.closest('.project-button :not(.add-project-button)')) {
    if (document.querySelector('.project-container')) {
      main.removeChild(document.querySelector('.project-container'))
    }
    const targetProject = userProjectList.projects[evt.target.closest('.project-button').getAttribute('id')]
    let showProject =  new CreateProjectContainer()
    let showProjectContainer = showProject.createprojectContainer(targetProject)
    let showToDos = showProject.createtoDoContainer(targetProject)
    main.append(showProjectContainer)
    for (let i=0; i < targetProject.todos.length; i++) {
      let showtodoexample = new DisplayToDo().DOM(targetProject.todos[i], i)
      showToDos.append(showtodoexample)
    }
    showProjectContainer.append(showToDos)
    
    showProjectContainer.addEventListener('click', function(evt) {
      if(evt.target.closest('.check-todo-item')) {
          const targetToDo = targetProject.todos[evt.target.closest('.todo-item').getAttribute('id')]
          targetToDo.changeDone()
          const checked = document.createElement('img')
          if (targetToDo.done === true) {
            checked.classList.add('project-icon')
            checked.src = Check
            evt.target.append(checked)
          } else {
            evt.target.remove(checked)
          }
      }
    })

    showProjectContainer.addEventListener('click', function(evt) {
      if(evt.target.closest('.todo-item > .delete-project-button')) {
        const todoContainer = document.querySelector('.todo-container')
        const toDoToDelete = evt.target.getAttribute('id')
        console.log(toDoToDelete)
        targetProject.deleteToDoFromProject(toDoToDelete)
        console.log(targetProject)
        todoContainer.removeChild(evt.target.parentElement)
        const toDosList = document.querySelectorAll('.todo-item')
        const arr = Array.from(toDosList);
        arr.forEach(todo => {
          todo.id = arr.indexOf(toDosList)
        })
        }
        })

    const openAddToDo = document.querySelector('#ToDo')
    openAddToDo.addEventListener('click', () => {
      const modal = document.querySelector('#addToDoCard')
      openModal(modal)
      addToDoByName(modal, targetProject) 
    })
    }
    })

  


function NormalizeDate(date) {
  let dateDay = date[date.length-2] + date[date.length-1]
  let monthDate = date[date.length-5] + date[date.length-4]
  let yearDate = date[date.length-8] + date[date.length-7]
  return `${dateDay}.${monthDate}.${yearDate}`
}

function addToDoByName(modal, targetProject) {
  const addNewToDoButton = document.querySelector('#NewToDo')

  addNewToDoButton.addEventListener('click', () => {
      const todoContainer = document.querySelector('.todo-container')
      const ToDoTitle = document.querySelector('input[placeholder="ToDo Title"]')
      const ToDoDueDate = document.querySelector('.todo-date-input')
      const ToDoPriority = document.querySelector('input[name="priority"]:checked')
      
      const todo = new ToDo(`${ToDoTitle.value}`, `${NormalizeDate(ToDoDueDate.value)}`, `${ToDoPriority.value}`)
      
      targetProject.addToDoToProject(todo)

      todoContainer.append(new DisplayToDo().DOM(todo, targetProject.todos.length - 1))

      closeModal(modal)
    }, { once: true })
  }



menuBtn.addEventListener('click', () => {
    projectList.classList.toggle('hidden')
})
