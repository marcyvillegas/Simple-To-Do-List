//Declare the variables for the button, input field value and div container of ul 
let button = document.querySelector("#submit-button");
let taskValue = document.querySelector("#task-name");
let taskList = document.querySelector(".task-container");
let container = document.querySelector(".task-box");

//Function when button is clicked
button.addEventListener("click", function (e) {

    //Cancel the default action
    e.preventDefault();

    //Create new div container for li
    let newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("new-task-container");

    //Create li element
    let newTask = document.createElement("li");
    newTask.classList.add("new-task");
    newTask.innerText = taskValue.value;

    //Create check button 
    let checkButton = document.createElement("button");
    checkButton.classList.add("check-button");
    checkButton.innerText = "OK";

    //Create delete button 
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("del-button");
    deleteButton.innerText = "X";

    //Insert elements to ul and div container for ul
    newTaskContainer.appendChild(newTask);
    newTaskContainer.appendChild(checkButton);
    newTaskContainer.appendChild(deleteButton);
    taskList.appendChild(newTaskContainer);
    container.appendChild(taskList);

    //Empty input value
    taskValue.value = "";

    //Function when delete button is clicked
    deleteButton.addEventListener("click", function () {
        newTaskContainer.removeChild(newTask);
        newTaskContainer.removeChild(checkButton);
        newTaskContainer.removeChild(deleteButton);
        taskList.removeChild(newTaskContainer);
    });
});


