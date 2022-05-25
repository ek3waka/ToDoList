import Plus from './plus-thick.png'

class CreateCard {
    constructor(objectToCreate) {
        this.objectToCreate = objectToCreate
    }
    createMenu() {
        const card = document.createElement('div')
        card.classList.add('create-card')

        const cardTitle = document.createElement('p')
        cardTitle.classList.add('create-card-title')
        cardTitle.textContent = `Create ${this.objectToCreate}`
    
        const form = document.createElement('form')
        form.classList.add('create-card-form')

        const input = document.createElement('input')
        input.type = 'text'
        input.placeholder = `${this.objectToCreate} Title`
        input.classList.add('input-title')

        const addButton = document.createElement('button')
        addButton.classList.add('project-button', 'add-project-button')

        const addImage = document.createElement('img')
        addImage.src = Plus
        addImage.classList.add('project-icon')

        const buttonText = document.createElement('p')
        buttonText.textContent = 'Add'

        addButton.append(addImage, buttonText)

        form.append(input, addButton)

        card.append(cardTitle, form)

        return card
    }
}

class CreateProjectMenu extends CreateCard {
    createProjectMenu() {

    }
    addProject() {

    }
}

class CreateTodoMenu {
    createTodoMenu() {

    }
    addTodo(){

    }
}

export {CreateCard, CreateProjectMenu, CreateTodoMenu}