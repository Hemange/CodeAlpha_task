document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new task item
    const listItem = document.createElement('li');

    // Task content
    const taskContent = document.createElement('span');
    taskContent.textContent = taskInput.value;
    listItem.appendChild(taskContent);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);

    // Add the task to the list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
});
