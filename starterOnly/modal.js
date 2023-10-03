function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close");
const modalContent = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal on Click
closeButton.addEventListener("click", closeModal);

// Close modal
function closeModal() {
  modalbg.style.display = "none";
}


// HANDLE FORM
// DOM Elements
const submitBtn = document.querySelector(".btn-submit");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let birthDate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleErrors();
});

function handleErrors() {
  let nameRegExp = /^[a-zA-Z-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\'\-]{2,}$/;
  let emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  let birthDateRegExp = /^[0-9]{2}[0-9]{2}[0-9]{4}$/;

  console.log(nameRegExp.test(firstName.value));
}