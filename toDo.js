let button = document.querySelector('#submitButton'); //Declare the button element  

button.addEventListener("click", function () { //Create function when button is clicked

    let taskValue = document.querySelector('#taskName').value; //Declare the variable that will get the value of the taskName  

    let taskList = document.createElement("li");

    let taskContainer = document.querySelector("#taskContainer");


    let taskTxt = document.createTextNode(taskValue);
    taskContainer = taskList.appendChild(taskTxt);
    document.body.appendChild(taskContainer);
});




