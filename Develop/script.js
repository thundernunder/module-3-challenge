// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", lengthPrompt)

function lengthPrompt () {
    var length = prompt("Please indicate the desired length of your password", "Must be between 8 and 128 characters");
  
    if (length === null) {
      return;
  
    } else if (length < 8 || length > 128 || isNaN(length)) {
      alert("Please choose a number between 8 and 128");
      lengthPrompt();
  
    }  else {
      console.log(length);
      lowerPrompt();
    }
  }

  function lowerPrompt () {
    var lower = prompt("Do you want lower-case letters?", "yes or no" );
    
    if (lower === null) {
      return;
  
    } else if (lower != 'no' && lower != 'yes') {
      alert(`Please type 'yes' or 'no'`);
      lowerPrompt();
  
    } else {
      console.log(lower);
      upperPrompt();
    }
  }

  function upperPrompt () {
    var upper = prompt("Do you want UPPER-CASE letters?", "yes or no" );
    
    if (upper === null) {
      return;
  
    } else if (upper != 'no' && upper != 'yes') {
      alert(`Please type 'yes' or 'no'`);
      upperPrompt();
  
    } else {
      console.log(upper);
      numericPrompt();
    }
  }

  function numericPrompt () {
    var numeric = prompt("Do you want numbers?", "yes or no" );
    
    if (numeric === null) {
      return;
  
    } else if (numeric != 'no' && numeric != 'yes') {
      alert(`Please type 'yes' or 'no'`);
      numericPrompt();
  
    } else {
      console.log(numeric);
      specialPrompt();
    }
  }

function specialPrompt () {
    var special = prompt("Do you want any special characters?", "yes or no" );
    
    if (special === null) {
      return;
  
    } else if (special != 'no' && special != 'yes') {
      alert(`Please type 'yes' or 'no'`);
      specialPrompt();
  
    } else {
      console.log(numeric);
      writePassword();
    }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);