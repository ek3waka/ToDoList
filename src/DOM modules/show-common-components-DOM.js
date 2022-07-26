import Plus from '../Icons/plus-thick.png'

class CreateAddButton {
    createAddButton(whatToCreate) {
        const addButton = document.createElement('button')
        addButton.classList.add('add-project-button')
        addButton.id = whatToCreate

        const addIcon = document.createElement('img')
        addIcon.classList.add('project-icon')
        addIcon.src = Plus
        
        const addTitle = document.createElement('p')
        addTitle.classList.add('project-name')
        addTitle.textContent = `Add ${whatToCreate}`

        addButton.append(addIcon, addTitle)

        return addButton
    }
}

export {CreateAddButton}