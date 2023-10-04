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
  const birthDateRegExp = /^([1-2][0-9]{3})+[-/]([0-9]{2})+[-/]([0-9]{2})$/;
  const quantityRegExp = /^[0-9]{1,}$/;

  // Unchecked checkbox counter
  let countUnchecked = 0;

  let checkFirstName =  checkValues(nameRegExp, firstName, "Vous devez saisir au minimum 2 caractères.");
  let checkLastName = checkValues(nameRegExp, lastName, "Vous devez saisir au minimum 2 caractères.");
  let checkEmail = checkValues(emailRegExp, email, "Vous devez saisir une adresse email valide.");
  let checkBirthDate = checkValues(birthDateRegExp, birthDate, "Vous devez saisir une date de naissance valide au format aaaa-mm-jj.");
  let checkQuantity = checkValues(quantityRegExp, quantity, "Veuillez rentrer une valeur valide.");
  let checkCheckBoxes = handleCheckBoxes(countUnchecked);

  if(checkFirstName && checkLastName && checkEmail && checkBirthDate && checkQuantity && checkCheckBoxes) {
    console.log("Le formulaire est totalement correct.");
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

function handleCheckBoxes(countUnchecked) {
  let checkBoxes = document.querySelectorAll(".formData .checkbox-input");
  let isRadioCheck = false;
  let isCheck = false;

  for(let checkBox of checkBoxes) {
    if (checkBox.type == "radio" && checkBox.checked === false){
      countUnchecked++
      if(countUnchecked == 6) {
        // console.log("Aucune case n'est coché");
        checkBox.parentElement.setAttribute("data-error", "Vous devez cocher une case.");
        checkBox.parentElement.setAttribute("data-error-visible", "true");
        isRadioCheck = false
      }
    } else if(checkBox.type == "radio" && checkBox.checked == true) {
      // console.log("Une case radio a été coché");
      checkBox.parentElement.removeAttribute("data-error");
      checkBox.parentElement.removeAttribute("data-error-visible");
      isRadioCheck = true;
    } 

    if(checkBox.id == "checkbox1" && checkBox.checked == false) {
      checkBox.parentElement.setAttribute("data-error", "Vous devez avoir lu et accepté les conditions d'utilisation.");
      checkBox.parentElement.setAttribute("data-error-visible", "true");
      isCheck = false;
    } else if (checkBox.id == "checkbox1" && checkBox.checked == true){
      // console.log("La checkbox est coché");
      checkBox.parentElement.removeAttribute("data-error");
      checkBox.parentElement.removeAttribute("data-error-visible");
      isCheck = true;
    }
  }
  
  if(isRadioCheck && isCheck) {
    return true;
  }
}