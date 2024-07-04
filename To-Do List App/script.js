
document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = document.getElementById('task').value;
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    document.getElementById('todo-list').appendChild(li);
    document.getElementById('task').value = '';
});
