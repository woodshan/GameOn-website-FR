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



  // Handle radio button
  let checkRadios = document.querySelectorAll(".formData .checkbox-input");
  for(let checkRadio of checkRadios) {
    // console.log(checkRadio.type);
    if(checkRadio.type == "radio" && checkRadio.checked == true) {
      // console.log(checkBox.checked)
      console.log("Une case radio a été coché")
    }

    if(checkRadio.id == "checkbox1" && checkRadio.checked == false) {
      console.log("décoché les conditions")
    }
  }
});

function handleErrors(event) {
  const nameRegExp = /^[a-zA-Z-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\'\-]{2,}$/;
  const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  const birthDateRegExp = /^([1-2][0-9]{3})+[-/]([0-9]{2})+[-/]([0-9]{2})$/;
  const quantityRegExp = /^[0-9]{1,}$/;

  let checkFirstName =  checkValues(nameRegExp, firstName, "Vous devez saisir au minimum 2 caractères.");
  let checkLastName = checkValues(nameRegExp, lastName, "Vous devez saisir au minimum 2 caractères.");
  let checkEmail = checkValues(emailRegExp, email, "Vous devez saisir une adresse email valide.");
  let checkBirthDate = checkValues(birthDateRegExp, birthDate, "Vous devez saisir une date de naissance valide au format aaaa-mm-jj.");
  let checkQuantity = checkValues(quantityRegExp, quantity, "Veuillez rentrer une valeur valide.");

  // console.log(birthDate.value + " DATE")
  // console.log(checkBirthDate);

  if(checkFirstName && checkLastName && checkEmail && checkBirthDate && checkQuantity) {
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