let nameError = document.getElementById("name-error");
let retypeError = document.getElementById("retype-password-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let submitError = document.getElementById("submit-error");



//this functions activates once a character is inputted in the name field
function validateName(){
    let name = document.getElementById("contact-name").value;

//if name field is empty
    if (name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    //check that valueis not (firstcharacter is alphabet, space, alphabet)
    else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write Full name";
        return false;
    }else{
        nameError.style.display = "none";
    }
    // nameError.src ="./images/images.jpeg";
    // nameError.className
    // return true;
    // nameError = document.createElement('img');
    // nameError.src = "./download.png";
    // nameError.className ='picture';
    
    // return true;
}


function validateEmail(){
    let email = document.getElementById("contact-email").value;

//email field is empty
    if (email.length == 0){
        emailError.innerHTML = "email is required";
        return false;
    }
    //check that valueis has the following
    else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "email invalid";
        return false;
    } else
//     // emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
//     // return true;
//     Image.style.display = 'block';
    emailError.style.display = "none";
}

function validatePassword(){
let password = document.getElementById("contact-password").value;
let maxNumberofChars = 10;
let left = maxNumberofChars-password.length;

if(left> 0){
    passwordError.innerHTML = left + 'more characters required';    
    return false;
    }
else if(!password.match(/^[a-zA-Z0-9!@#$%^&*]{6,10}$/)) {
    passwordError.innerHTML = "password should contain atleast one number and one special character";
        return false;
    }else
    passwordError.style.display = "none";
}

function validatePasswordRetype(){
    let retype = document.getElementById("contact-password-retype").value;

//phone field is empty
if (retype.length == 0){
    retypeError.innerHTML = "retype password here";
    return false;
}
//check that valueis upto 11
else if (!retype.match(password)){
    retypeError.innerHTML = "password must match above";
    return false;
}else
retypeError.style.display = "none";
}
// phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
// return true;

// Image.style.display = 'block';
// return true;

//check if all validation was followed
function validateForm(){
    if(!validateName() || !validatePasswordRetype() || !validateEmail() || !validatePassword()){
        submitError.style.display = 'block'
        submitError.innerHTML = "Please fix error to submit";
// set timeout
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}


let eyeicon = document.getElementById("eye-icon")
    let password = document.getElementById("contact-password")
    //when you click icon, it shows or hide password and changes image of icon
    eyeicon.onclick = function(){
        if (password.type == 'password'){
            password.type = "text";
            eyeicon.src = "./images/eye-open.png";
        }else{
            password.type = "password";
            eyeicon.src = "./images/eye-close.png";
        }
    }