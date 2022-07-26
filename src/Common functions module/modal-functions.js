import {getDate} from './data-functions'

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

export {openModal, closeModal}