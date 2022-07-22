// Assignment Code
var generateBtn = document.querySelector("#generate");

function thirdPrompt () {
 var upper = prompt("Do you want UPPER CASE letters?", "yes or no");

  var smallUpper = upper.toLowerCase;

  if (smallUpper !== "yes" || smallUpper !== "no") {
    alert(`please type "yes" or "no"`)
    thirdPrompt();
  } else {
    fourthPrompt();
  }


}

function secondPrompt () {
  var lower = prompt("Do you want lower case letters?", "yes or no" );

  var smallLower = lower.toLowerCase;

  if (smallLower != "yes" || smallLower != "no") {
    alert(`please type "yes" or "no"`)
    secondPrompt();
  } else {
    thirdPrompt();
  }
}

function firstPrompt () {
  var length = prompt("Please indicate the desired length of your password", "Must be between 8 and 128 characters");

  console.log(length);

  if (length < 8 || length > 128 || length === NaN) {
    alert("Please choose a password length between 8 and 128 characters");
    firstPrompt();

  } else {
    secondPrompt();
  }
}

generateBtn.addEventListener("click", firstPrompt)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
