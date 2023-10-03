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
let submitBtn = document.querySelector(".btn-submit");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let birthDate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleErrors(e);
});

function handleErrors(event) {
  const nameRegExp = /^[a-zA-Z-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\'\-]{2,}$/;
  const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  const birthDateRegExp = /^([0-9]{4})+[-/]([0-9][0-9])+[-/]([0-9][0-9])$/;

  // 21-01-2023 DATE
  // 0001-01-01 DATE

  let checkFirstName =  checkValues(nameRegExp, firstName, "Vous devez saisir au minimum 2 caractères.");
  let checkLastName = checkValues(nameRegExp, lastName, "Vous devez saisir au minimum 2 caractères.");
  let checkEmail = checkValues(emailRegExp, email, "Vous devez saisir une adresse email valide.");
  let checkBirthDate = checkValues(birthDateRegExp, birthDate, "Vous devez saisir une date de naissance valide");
  console.log(birthDate.value + " DATE")
  console.log(checkBirthDate);

  if(checkFirstName && checkLastName && checkEmail) {
    console.log("hello");
  } else {
    event.preventDefault();
    console.log("Une erreur dans le formulaire.");
  }
}

function checkValues(regex, input, errorMsg) {
  if(!regex.test(input.value)) {
    input.parentElement.setAttribute("data-error", errorMsg);
    input.parentElement.setAttribute("data-error-visible", "true");
  } else {
    input.parentElement.removeAttribute("data-error");
    input.parentElement.removeAttribute("data-error-visible");
  }

  let isCheck = regex.test(input.value);
  return isCheck;
}