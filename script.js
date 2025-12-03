// Get references to input, button, and task list
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
addBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;
    li.className = "task-item";

    // Add Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    li.appendChild(completeBtn);

    // Add Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn);

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }
});

// Event delegation for Complete and Delete buttons
taskList.addEventListener("click", function(e) {
  const target = e.target;

  // Complete button clicked
  if (target.classList.contains("complete-btn")) {
    const taskItem = target.parentElement;
    taskItem.style.textDecoration = "line-through"; // Strike-through task
  }

  // Delete button clicked
  if (target.classList.contains("delete-btn")) {
    const taskItem = target.parentElement;
    taskList.removeChild(taskItem); // Remove task from list
  }
});
