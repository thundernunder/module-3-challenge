// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordKeys = {
  listLowerAlpha: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],

  listUpperAlpha: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],

  listNumericCharacters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],

  listSpecialCharacters: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],

  totalPasswordLength: 0,
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword() 

  function generatePassword() {

    var passLength;
    var lowerCase;
    var upperCase;
    var wantNumber;
    var wantSpecial;

    var passReturn = "";
    passLength = 0
    passwordKeys.totalPasswordLength = 0;

    var passLength = prompt("How many characters do you want your password to be?", "must be between 8 and 128 characters");

    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Please choose a number between 8 and 128");
        generatePassword();

    } else {
      var lowerCase = confirm("Do you want lower-case characters?");

      var upperCase = confirm("Do you want UPPER CASE letters?");

      var wantNumber = confirm("Do you want numbers?");

      var wantSpecial = confirm ("Do you want special characters?")
       
    } 
    if (lowerCase === false && upperCase === false && wantNumber === false && wantSpecial === false) {
      alert("nah dog. pick one");
      generatePassword();
  }
  };

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







