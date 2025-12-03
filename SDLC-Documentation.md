# Step 1 - Planning Stage
Project Title: To-Do List Application

Project Overview:
The To-Do List Application is a simple web-based system that allows users to add tasks, view their tasks, mark tasks as completed, and delete tasks. It helps users stay organized and manage daily activities efficiently.

Purpose of the Project:
The purpose of this system is to provide an easy and fast way for users to keep track of their tasks in one place. It organizes tasks, improves productivity, and helps users remember important activities.

Project Goals:

Allow users to add new tasks.

Display all tasks in a list.

Allow users to mark tasks as completed.

Allow users to delete tasks.

Keep the interface simple and user-friendly.


Project Scope:
The system will include:

Input field for adding tasks

A task list that updates instantly

“Complete” and “Delete” buttons

Temporary storage (browser memory only)


The system will NOT include:

User login

Database storage

Task categories or sorting

Notifications or reminders

Users:

Students

Worker
Anyone who needs to manage daily tasks

# Step 2 -Analysis Stage
*Functional Requirements:*
- Users can add a new task by typing in an input field and pressing a button.
- Users can view all tasks in a list below the input field.
- Users can mark a task as completed — it should show visually (e.g., strike-through).
- Users can delete any task from the list.
- Tasks remain visible as long as the browser is open (temporary storage).

*Non-Functional Requirements:*
- The app should load quickly in any modern browser.
- The interface should be simple and easy to understand.
- Buttons and inputs should be accessible and clearly labeled.
- The app should work on both desktop and mobile screens (responsive).
# Step 3 — Design Stage

## Add Task Section
- Input field: where the user types a new task
- Add button: click to add the task to the task list
- Names for coding: Input -> #task-input, Button -> #add-btn

## Task List Section
- Shows all tasks
- Each task has:
  - Complete button -> marks task as done
  - Delete button -> removes task
- Names for coding: Task container -> #task-list, each task -> .task-item, complete button -> .complete-btn, delete button -> .delete-btn

## Footer
- Optional text like "© 2025 To-Do List App"