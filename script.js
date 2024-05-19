const generalRadio = document.getElementById("general");
const supportRadio = document.getElementById("support");
const generalParent = document.querySelector(".one");
const supportParent = document.querySelector(".two");
const generalDiv = document.querySelector(".general-radio");
const supportDiv = document.querySelector(".support-radio");
const checkDiv = document.querySelector(".checkbox");

const firsName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const checkBox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submitBtn");
const myForm = document.querySelector("form");

const firstNameError = document.querySelector(".firstname-error");
const lastNameError = document.querySelector(".lastname-error");
const emailError = document.querySelector(".email-error");
const radioError = document.querySelector(".radio-error");
const msgError = document.querySelector(".msg-error");
const checkError = document.querySelector(".check-error");
const agreementDiv = document.querySelector(".agreement div");
const errorMsg = document.querySelectorAll('.errorMsg');
const successMsg = document.querySelector(".successMsg");

let emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;

function emailValidate(email){
    return emailRegex.test(email)
}

generalParent.addEventListener("click", () => {
    generalRadio.style.display = "block";
    generalParent.style.borderColor = "hsl(169, 82%, 27%)";
    generalParent.style.backgroundColor = "hsl(148, 38%, 91%)";
    supportParent.style.borderColor = "";
    supportParent.style.backgroundColor = "";
    generalDiv.style.border = "none";

    supportRadio.style.display = "none";
    supportDiv.style.border = "";

    if(!generalParent.parentNode.classList.contains('active')){
        generalParent.parentNode.classList.add('active');
    }
});

supportParent.addEventListener("click", () => {
    supportRadio.style.display = "block";
    supportParent.style.borderColor = "hsl(169, 82%, 27%)";
    supportParent.style.backgroundColor = "hsl(148, 38%, 91%)";
    generalParent.style.borderColor = "";
    generalParent.style.backgroundColor = "";
    supportDiv.style.border = "none";

    generalRadio.style.display = "none";
    generalDiv.style.border = "";

    if(!supportParent.parentNode.classList.contains('active')){
        supportParent.parentNode.classList.add('active');
    }
});

agreementDiv.addEventListener("click", (e) => {
    e.preventDefault();

    checkDiv.classList.toggle('active');
    if(checkDiv.classList.contains('active')){
        checkDiv.style.borderColor = "";
        checkBox.style.display = "block";
    }else if(!checkDiv.classList.contains('active')){
        checkDiv.style.borderColor = "hsl(186, 15%, 59%)";
        checkBox.style.display = "none";
    }
})

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    allFields();
    if(firsName.value.trim() == "" || lastName.value.trim() == "" || emailValidate(email.value) === false ||
    message.value.trim() == "" || !generalParent.parentNode.classList.contains('active') || checkBox.style.display == "none"){
        console.log('Required all fields')
    }else{
        console.log("all fields are filled")
        successMsg.style.display = "block";
    }
});

const allFields = () => {
    let checkItem = null;
    if(firsName.value == ""){
        firstNameError.style.display = "block";
        firsName.style.borderColor = "hsl(0, 66%, 56%)";
        firstNameError.classList.add('active');
    }else{
        firstNameError.style.display = "";
        firsName.style.borderColor = "";
        firstNameError.classList.remove('active');
    }

    if(lastName.value == ""){
        lastNameError.style.display = "block";
        lastName.style.borderColor = "hsl(0, 66%, 56%)";
        lastNameError.classList.add('active');
    }else{
        lastNameError.style.display = "";
        lastName.style.borderColor = "";
        lastNameError.classList.remove('active');
    }

    if(emailValidate(email.value) === false){
        emailError.style.display = "block";
        email.style.borderColor = "hsl(0, 66%, 56%)";
        emailError.classList.add('active');
    }else{
        emailError.style.display = "";
        email.style.borderColor = "";
        emailError.classList.remove('active');
    }

    if(generalRadio.style.display == "" && supportRadio.style.display == ""){
        radioError.style.display = "block";
        radioError.classList.add('active');
    }else{
        radioError.style.display = "";
        radioError.classList.remove('active');
    }

    if(message.value == ""){
        msgError.style.display = "block";
        message.style.borderColor = "hsl(0, 66%, 56%)";
        msgError.classList.add('active');
    }else{
        msgError.style.display = "";
        message.style.borderColor = "";
        msgError.classList.remove('active');
    }

    if(!checkDiv.classList.contains('active')){
        checkError.style.display = "block";
        checkError.classList.add('active');
    }else{
        checkError.style.display = "";
        checkError.classList.remove('active');
    }
}



