import Check from '../Icons/check-bold.png'

function toggleTodoCheck(evt, targetProject) {
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
    console.log(targetProject)
}

export {toggleTodoCheck}