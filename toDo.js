let button = document.querySelector("#submitButton");
let taskValue = document.querySelector("#taskName");
let taskList = document.querySelector(".taskContainer");


button.addEventListener("click", function(e){
    e.preventDefault();
    let newTask = document.createElement('p');
    newTask.innerText = taskValue.value;
    taskList.appendChild(newTask);

});

