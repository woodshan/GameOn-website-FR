function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const background = document.querySelector("body");
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close");
const modalContent = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  background.style.overflowY = "hidden";
}

// Close Modal on Click
closeButton.addEventListener("click", closeModal);

/**
 * Close Modal
 */
function closeModal() {
  modalbg.style.display = "none";
  background.style.overflowY = "auto";
}


// HANDLE FORM
// DOM Elements
const submitBtn = document.querySelector(".btn-submit");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");

// Handle errors & validation on submit btn
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // If form are correct display confirmation modal
  if(handleErrors()) {
    confirmation();
  }
});

/**
 * Handle errors form
 * @returns boolean
 */
function handleErrors() {
  // Regexs creation
  const nameRegExp = /^[a-zA-Z-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\'\-]{2,}$/;
  const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  const birthDateRegExp = /^([1-2][0-9]{3})+[-/]([0-9]{2})+[-/]([0-9]{2})$/;
  const quantityRegExp = /^[0-9]{1,}$/;

  // Unchecked counter
  let countUnchecked = 0;

  // Check if form values are correct & implement errors
  const checkFirstName =  checkValues(nameRegExp, firstName, "Vous devez saisir au minimum 2 caractères.");
  const checkLastName = checkValues(nameRegExp, lastName, "Vous devez saisir au minimum 2 caractères.");
  const checkEmail = checkValues(emailRegExp, email, "Vous devez saisir une adresse email valide.");
  const checkBirthDate = checkValues(birthDateRegExp, birthDate, "Vous devez saisir une date de naissance valide au format aaaa-mm-jj.");
  const checkQuantity = checkValues(quantityRegExp, quantity, "Veuillez rentrer une valeur valide.");
  const checkCheckBoxes = handleCheckBoxes(countUnchecked);

  // Check if all the form values are correct & return boolean
  if(checkFirstName && checkLastName && checkEmail && checkBirthDate && checkQuantity && checkCheckBoxes) {
    return true;
  } else {
    return false;
  }
}

/**
 * Test regex & add errors msg
 * @param {object} regex 
 * @param {object} input HTMLElement
 * @param {string} errorMsg 
 * @returns boolean
 */
function checkValues(regex, input, errorMsg) {
  if(!regex.test(input.value)) {
    input.parentElement.setAttribute("data-error", errorMsg);
    input.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    input.parentElement.removeAttribute("data-error");
    input.parentElement.removeAttribute("data-error-visible");
    return true;
  }
}

/**
 * Handle check radio, checkboxes & set errors msg
 * @param {number} countUnchecked 
 * @returns boolean
 */
function handleCheckBoxes(countUnchecked) {
  // Select checkBoxes
  let checkBoxes = document.querySelectorAll(".formData .checkbox-input");

  // Set unchecked
  let isRadioCheck = false;
  let isCheck = false;

  // Handle radio Btn
  for(let checkBox of checkBoxes) {
    if (checkBox.type == "radio" && checkBox.checked === false){
      countUnchecked++
      if(countUnchecked == 6) {
        // console.log("Aucune case n'est coché");
        checkBox.parentElement.setAttribute("data-error", "Vous devez choisir une option.");
        checkBox.parentElement.setAttribute("data-error-visible", "true");
        isRadioCheck = false
      }
    } else if(checkBox.type == "radio" && checkBox.checked == true) {
      // console.log("Une case radio a été coché");
      checkBox.parentElement.removeAttribute("data-error");
      checkBox.parentElement.removeAttribute("data-error-visible");
      isRadioCheck = true;
    } 

    // Handle terms of use btn
    if(checkBox.id == "checkbox1" && checkBox.checked == false) {
      checkBox.parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
      checkBox.parentElement.setAttribute("data-error-visible", "true");
      isCheck = false;
    } else if (checkBox.id == "checkbox1" && checkBox.checked == true){
      // console.log("La checkbox est coché");
      checkBox.parentElement.removeAttribute("data-error");
      checkBox.parentElement.removeAttribute("data-error-visible");
      isCheck = true;
    }
  }
  
  // Check if radio & checkbox are checked
  if(isRadioCheck && isCheck) {
    return true;
  } else {
    return false;
  }
}

/**
 * Add & style modal confirmation
 */
function confirmation() {
  let confirmationBody = document.querySelector(".modal-confirmation");
  let confirmationBtn = document.querySelector(".confirmation-btn");

  // Style
  modalBody.style.display = "none";
  confirmationBody.style.display = "flex";

  // Event on close Button
  confirmationBtn.addEventListener("click", () => {
    modalbg.style.display = "none";
    background.style.overflowY = "auto";
  });
};

/**
 * Create element in DOM
 * @param {string} type 
 * @param {object} parent HTMLElement
 * @returns object
 */
function createElement(type, parent) {
  let element = document.createElement(type);

  parent.append(element);

  return element;
}