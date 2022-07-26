function deleteTodo(evt, targetProject) {
    if(evt.target.closest('.todo-item > .delete-project-button')) {
        const todoContainer = document.querySelector('.todo-container')
        const toDoToDelete = evt.target.getAttribute('id')
        targetProject.deleteToDoFromProject(toDoToDelete)
        todoContainer.removeChild(evt.target.parentElement)
        const toDosList = document.querySelectorAll('.todo-item')
        const arr = Array.from(toDosList);
        arr.forEach(todo => {
          todo.id = arr.indexOf(toDosList)
        })
    }
}

export {deleteTodo}