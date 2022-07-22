// Assignment Code
var generateBtn = document.getElementById("#generate");

function upperCase() {
  prompt("Do you want to include capital letter(s)?");
}

// Write password to the #password input
function writePassword() {
  prompt("Please choose the length of your password.", "Must be between 8 and 128 characters");
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function createPassword() {
  prompt("Please choose your password length", "Must be between 8 and 128 characters");
}
