//Declare the variables
let inputContainer = document.querySelector(".todo-input"); //Container of the input field
let button = document.querySelector("#submit-button"); //Add button
let taskValue = document.querySelector("#task-name"); //Input field
let wholeContainer = document.querySelector(".task-box"); //Container of ul
let taskList = document.querySelector(".task-container"); //Unordered list of the tasks
let snackBar = document.querySelector(".snack-bar"); //Snack Bar for delete and check button

//Function when button is clicked
button.addEventListener("click", function (e) {

    //Cancel the default action
    e.preventDefault();

    //Create new div container for li
    let newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("new-task-container");

    //Create animation for adding task
    newTaskContainer.style.animation = "fadeIn 0.5s ease";
    setTimeout(function () {
        newTaskContainer.style.animation = "none";
    }, 500);

    //Create li element
    let newTask = document.createElement("li");
    newTask.classList.add("new-task");
    newTask.innerText = taskValue.value;

    //Validate if input field is empty
    if (taskValue.value.trim() == '') {
        inputContainer.setAttribute("id", "error")
        setTimeout(function () {
            inputContainer.removeAttribute("id");
        }, 2500);
    } else {

        //Create check button 
        let checkButton = document.createElement("button");
        checkButton.classList.add("check-button");
        checkButton.innerHTML = '<i class="fas fa-check"></i>';

        //Create delete button 
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("del-button");
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';

        //Insert elements to ul and div container for ul
        newTaskContainer.appendChild(newTask);
        newTaskContainer.appendChild(checkButton);
        newTaskContainer.appendChild(deleteButton);
        taskList.appendChild(newTaskContainer);
        wholeContainer.appendChild(taskList);

        //Empty input value
        taskValue.value = "";

        //Function when check button is clicked
        checkButton.addEventListener("click", function () {
            newTaskContainer.style.animation = "fadeOut 0.3s ease";
            setTimeout(function () {
                newTaskContainer.removeChild(newTask);
                newTaskContainer.removeChild(checkButton);
                newTaskContainer.removeChild(deleteButton);
                taskList.removeChild(newTaskContainer);
                newTaskContainer.style.animation = "none";
            }, 200);

            snackBar.innerHTML = "<p>You have completed your task.</p>";
            snackBar.style.display = "block";
            setTimeout(function () {
                snackBar.style.display = "none";
            }, 3000);
        });

        //Function when delete button is clicked
        deleteButton.addEventListener("click", function () {
            newTaskContainer.style.animation = "fadeOut 0.3s ease";
            setTimeout(function () {
                newTaskContainer.removeChild(newTask);
                newTaskContainer.removeChild(checkButton);
                newTaskContainer.removeChild(deleteButton);
                taskList.removeChild(newTaskContainer);
                newTaskContainer.style.animation = "none";
            }, 200);

            snackBar.innerHTML = "<p>Your task has been deleted.</p>";
            snackBar.style.display = "block";
            setTimeout(function () {
                snackBar.style.display = "none";
            }, 3000);

        });
    }
});

