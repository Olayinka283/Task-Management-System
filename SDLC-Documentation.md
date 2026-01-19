SDLC Documentation – Task Management System (TMS)
1.Requirement Analysis Phase
Purpose: Identify what the system should do and how it should perform.
Functional Requirements:
Users can add a new task
Users can mark a task as completed
Users can delete a task
System stores tasks using localStorage to persist data across page refresh
Non-Functional Requirements:
User-friendly interface
Fast and responsive on web browsers
Simple, readable, and maintainable code
Works on all modern browsers
Output: Software Requirement Specification (SRS) for the Task Management System.
2.System Design Phase
Purpose: Plan the system’s structure and behavior.
Frontend Design:
HTML: input box, buttons, task list
CSS: styling for layout, completed tasks, buttons
Backend / Logic Design:
JavaScript handles adding, deleting, and marking tasks
Uses localStorage to save tasks persistently
Data Design
task = {
    id: 12345,               // unique identifier
    description: "Buy milk", // task description
    completed: false          // task status
}
tasks = [task1, task2, ...] // array of tasks
Output:
Wireframe/UI design
Data structure and logic design
3. Implementation Phase
Purpose: Build the system based on the design.
Technologies Used:
HTML: structure
CSS: styling
JavaScript: logic and localStorage
Features Implemented:
Add a new task
Mark a task as completed
Delete a task
Tasks persist across page refresh using localStorage
Output: A working Task Management System in the browser.
4.Testing Phase
Ensure the system works as expected.
Types of Testing:
Unit Testing: Test each function individually (add, delete, complete)
Integration Testing: Ensure UI and logic work together
User Acceptance Testing: Verify tasks behave correctly in the browser
Action                    Input                     Expected Outcome
Add Task                  "Buy groceries"           Task appears in the list
Mark Complete              "Buy groceries"           Task text shows as completed (strikethrough)
Delete Task                "Buy groceries"            Task is removed from the list
Refresh Page                Any tasks                 Tasks persist and display correctly
5.Deployment Phase
Purpose: Make the system available to users.
Hosted on GitHub Pages
Users can access via:
https://olayinka283.github.io/Task-Management-System/
Output: Live Task Management System accessible online
6.Maintenance Phase
Purpose: Keep the system updated and functional.
Fix bugs or issues
Add new features (e.g., filter tasks, clear all)
Improve UI for better usability
Ensure localStorage works as browsers update
Output: Continuous improvement and user-friendly system.














