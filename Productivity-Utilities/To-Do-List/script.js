/*
 * Project by Ashraf Morningstar
 * GitHub: https://github.com/AshrafMorningstar
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Project loaded successfully by Ashraf Morningstar');
    console.log('GitHub: https://github.com/AshrafMorningstar');
});

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    
    if (!text) {
        alert('Please enter a task');
        return;
    }
    
    tasks.push({
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    });
    
    input.value = '';
    saveTasks();
    renderTasks();
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}

function filterTasks(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true;
    });
    
    taskList.innerHTML = filteredTasks.map(task => `
        <li class="task-item ${task.completed ? 'completed' : ''}">
            <span class="task-text" onclick="toggleTask(${task.id})">${task.text}</span>
            <div class="task-actions">
                <button onclick="toggleTask(${task.id})">${task.completed ? '↩️' : '✓'}</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">🗑️</button>
            </div>
        </li>
    `).join('');
    
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;
    
    document.getElementById('stats').textContent = `Total: ${total} | Active: ${active} | Completed: ${completed}`;
}

renderTasks();
