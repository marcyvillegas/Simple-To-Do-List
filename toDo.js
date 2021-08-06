let button = document.querySelector('#submitButton'); //Declare the button element  

button.addEventListener("click", function(){ //Create function when button is clicked
    
    let taskValue = document.querySelector('#taskName').value; //Declare the variable that will get the value of the taskName  
    
    document.querySelector("#taskContainer").innerHTML = '<li>' + taskValue + '</li> <button type="submit" id="delButton">X</button>';
});



