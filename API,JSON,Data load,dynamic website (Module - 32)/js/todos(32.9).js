function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => console.log(data))
}

function displayTodos(todos) {
    const todoContainer = document.getElementById('todo-container');
    for (const todo of todos) {
        //    create the child element
        const todoDiv = document.createElement('div');
        // set the innerText or innerHTML
        todoDiv.innerHTML = `
        <h3>title: ${todo.title}</h3>
        <p>user id: ${todo.userId}</p>
    <p>Is completed: ${todo.completed === true ? 'complete': 'Not complete'}</p>
        `;
        // appendChild
        todoContainer.appendChild(todoDiv);
    }
}
    loadTodos();