document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', deleteTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const li = document.createElement('li');
            li.innerHTML = ${todoText} <button class="delete">Delete</button>;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }

    function deleteTodo(event) {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    }
});