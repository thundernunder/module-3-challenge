// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  function generatePassword() {
    var passLength = prompt("How many characters do you want your password to be?", "must be between 8 and 128 characters");

    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Please choose a number between 8 and 128");
        generatePassword();
    } else {
        showPrompts();
    }



  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
