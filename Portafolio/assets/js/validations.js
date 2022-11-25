var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");


function validateEmail(){
    if(emailField.value == ""){
        emailError.innerHTML = "El campo esta vacio, debe ingresar datos"
        emailField.style.border = "3px solid red"
        return false;
    }
    else if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Por favor ingrese un email válido"
        emailField.style.border = "3px solid red"
        return false;
    }

    emailError.innerHTML = ""
    emailField.style.border = "4px solid green"
    return true
}