// All the DOM elements
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// taskData retrieve data from local storage or be an empty array.
const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};


// This function is used to add new task, or update existing task.
const addOrUpdateTask = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    
};
