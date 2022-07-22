// Assignment Code
var generateBtn = document.querySelector("#generate");

function firstPrompt () {
  prompt("Please indicate the desired length of your password", "Must be between 8 and 128 characters");
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
