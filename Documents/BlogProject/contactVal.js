//contactVal.js

function printError(id, message){
    var name = document.getElementById(id);
    name.innerHTML = message;
}

function validateField(field, fieldError, regex){
    var f = document.getElementById(field);
    console.log(field);

    if (f[0].value === ""){
        printError(fieldError, "Error: Empty" +field +".");
        return false;
    } 
    else if (regex.test(f[0].value)==flae){
        printError(fieldError, "Error: invalid "+field +".");
    } 
    else {
        printError(fieldError, "");
        return true;
    }

    function validateName(){
        var regex = /^[a-zA-Z/s]+$/;
        return validateField("name", "nameErr", regex);
    }
    
    function validateEmail() {
        var regex = /^\S+@\S+\.\S+$/;
        return validateField("email", "emailErr", regex);
    }
    
    function validatePhone() {
        var regex = /[0-9]{10}/;
        return validateField("mobile", "mobileErr", regex);
    }

    function validateMessage(){
        
    }
    }
    function validateForm() {

        var submit = document.getElementById("submit");
        submit.disabled = true;
    
        //Validation array
        var valArray = new Array(4);
        valArray[0] = validateName();
        valArray[1] = validateEmail();
        valArray[2] = validatePhone();
        valArray[4] = validateMessage();
    
        for (var i = 0; i < valArray.length; i++) {
            if (valArray[i] == false) {
                return false;
            }
        }
    
        submit.disabled = false;
        return true; //if all conditions are successful
    }
