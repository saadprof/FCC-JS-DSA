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

// This function delete existing task. dataArrIndex find tasks index,
// removes using arr.splice(startingIndex, Counts, replaceItem) method to remove task
// Then renew the localStorage
const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(taskData));
};

// This function find the index of current task and get currentTask data from taskData
// the show all the currenTask data in the input fields so that user can edit.
// replace button text "Add Task" to "Update Task"
const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    currentTask = taskData[dataArrIndex];

    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");
};

// This function resets every current data field so that new task can be added.
const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
};

if (taskData.length) {
    updateTaskContainer();
}

// event listener on "Add Task" button. onclick it shows taskForm
openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden")
);

// event listener on "Close" sign to close the task form.
// But before closing it checks if any of input fields contain value.
// If input field contains value it shows a modal, else reset the input fields.
closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues =
        titleInput.value || dateInput.value || descriptionInput.value;
    const formInputValuesUpdated =
        titleInput.value !== currentTask.title ||
        dateInput.value !== currentTask.date ||
        descriptionInput.value !== currentTask.description;

    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
});
