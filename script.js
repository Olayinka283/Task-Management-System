// ======== TASK MANAGEMENT SYSTEM WITH LOCALSTORAGE ========

// Select DOM elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// ======== LOAD TASKS FROM LOCALSTORAGE ON PAGE LOAD ========
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// ======== ADD TASK ========
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task.");

    const task = {
        id: Date.now(),
        description: taskText,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = "";
});

// ======== SAVE TASKS TO LOCALSTORAGE ========
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ======== RENDER TASKS ========
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        li.innerHTML = `
            <span>${task.description}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;

        // MARK AS COMPLETED
        li.querySelector(".complete-btn").addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        // DELETE TASK
        li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        taskList.appendChild(li);
    });
}
