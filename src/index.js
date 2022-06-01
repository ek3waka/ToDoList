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
    let addProject = new CreateCard('Project')
    main.append(addProject.createMenu())
    
    
})


let todoexample = new ToDo('Do smth', '29.01.12', 'highest')
let todoexample2 = new ToDo('todoexample2', '01.01.42', 'lowest')

example.addToDoToProject(todoexample)
example.addToDoToProject(todoexample2)




let showtodoexample = new DisplayToDo().DOM(todoexample)
let showtodoexample2 = new DisplayToDo().DOM(todoexample2)
let showProject =  new CreateProjectContainer().createprojectContainer(example)

showProject.append(showtodoexample, showtodoexample2)

main.append(showProject)





menuBtn.addEventListener('click', () => {
    projectList.classList.toggle('hidden')
})

