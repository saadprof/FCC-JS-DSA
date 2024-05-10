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

    // arr.findIndex(callback Func()) is used to check if a item is in a array.
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === currentTask.id
    );
    // taskObj is to create new object. Using Date.now() to create a unique id is new and interesting to me.
    const taskObj = {
        id: `${titleInput.value
            .toLowerCase()
            .split(" ")
            .join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };

    // This condition checks if a item is in array. if not, then add to the array.
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[dataArrIndex] = taskObj;
    }

    // store the stringified taskData using JSON.stringify under the "data" key in storage;
    localStorage.setItem("data", JSON.stringify(taskData));
    updateTaskContainer();
    reset();
};


// This function creates new element in the DOM.
const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";

    taskData.forEach(({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
          <div class="task" id="${id}">
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Description:</strong> ${description}</p>
            <button onclick="editTask(this)" type="button" class="btn">Edit</button>
            <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
          </div>
        `;
    });
};
