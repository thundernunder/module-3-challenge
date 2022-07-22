// Assignment Code
var generateBtn = document.querySelector("#generate");

function upperPrompt () {
 var upper = prompt("Do you want UPPER CASE letters?", "yes or no");

  var smallUpper = upper.toLowerCase();

  if (smallUpper !== "yes" || smallUpper !== "no") {
    alert(`please type "yes" or "no"`)
    upperPrompt();
  } else {
    numericPrompt();
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



    



generateBtn.addEventListener("click", lengthPrompt)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);