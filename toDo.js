//Declare the variables for the button, input field value and div container of the new tasks
let button = document.querySelector("#submitButton");
let taskValue = document.querySelector("#taskName");
let taskList = document.querySelector(".taskContainer");
let container = document.querySelector(".taskBox");

//Function when button is clicked
button.addEventListener("click", function(e){
    //Cancel the default action
    e.preventDefault();
    let newTask = document.createElement('li');
    newTask.setAttribute("id","newTask")
    let deleteButton = document.createElement('button');
    deleteButton.classList.add("delButton");
    newTask.innerText = taskValue.value;
    deleteButton.innerText = "X";
    newTask.appendChild(deleteButton);
    container.appendChild(taskList);
    taskList.appendChild(newTask);
    taskValue.value = "";

    deleteButton.addEventListener("click", function(){
        taskList.removeChild(newTask);
    });
});


