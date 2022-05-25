import Cog from './cog.png'
import Menu from './menu.png'
import {Project, DisplayProject, CreateAddButton} from './project-list'
import {CreateCard, CreateProjectMenu, CreateTodoMenu} from './create-card'

const wrapper = document.querySelector('.wrapper')

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

let example2 = new Project('Example2')
projectList.append(new DisplayProject(example2).showProjectDOM())

let addProjectButton = new CreateAddButton()
projectList.append(addProjectButton.createAddButton())




let addProject = new CreateCard('Project')
main.append(addProject.createMenu())












//create footer
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