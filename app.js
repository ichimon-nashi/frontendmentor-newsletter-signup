"use strict";

const subscribeButton = document.getElementById("subscribe-btn");
const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const errorMessage = document.querySelector(".error-msg");
const backgroundContainer = document.querySelector(".background-container");
const submitForm = document.querySelector(".sign-up-form");
const successMessage = document.querySelector(".submit-success-container");
const userEmail = document.getElementById("user-email");


function submitSuccess(inputEmail) {
    backgroundContainer.classList.add("hidden");
    submitForm.classList.add("hidden");
    successMessage.classList.remove("hidden");
    userEmail.innerHTML = inputEmail.value;
}

function validateEmail() {
    const inputEmail = document.getElementById("email-address");
    console.log(inputEmail.value)
    
    if (inputEmail.value.match(emailFormat)) {
        console.log("valid email")
        submitSuccess(inputEmail);
    } else {
        console.log("invalid email")
        inputEmail.classList.add("error-input");
        errorMessage.innerHTML = "Valid email required"
    }
}

subscribeButton.addEventListener("click", validateEmail);
