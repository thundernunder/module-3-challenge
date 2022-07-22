// Assignment Code
var length;
var lower;
var upper;
var numeric;
var special;

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);

function generatePassword () {
    var length = prompt("Please indicate the desired length of your password", "Must be between 8 and 128 characters");
  
    if (length === null) {
      return;
  
    } else if (length < 8 || length > 128 || isNaN(length)) {
      alert("Please choose a number between 8 and 128");
      generatePassword();
  
    }  else {
        alert(`Your password will be ${length} characters`);
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

      if (lower === 'yes') {
        alert('Your password will have lower-case letters');
      } else {
        alert('Your password will not have lower-case letters');
      }
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
      if (upper === 'yes') {
        alert('Your password will have UPPER-CASE letters');
      } else {
        alert('Your password will not have UPPER-CASE letters');
      }
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
      if (numeric === 'yes') {
        alert('Your password will have numbers');
      } else {
        alert('Your password will not have numbers');
      }
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
      console.log(special);
      if (special === 'yes') {
        alert('Your password is special!');
      } else {
        alert('Your password is not special!');
      }

      writePassword();
    }
  } 




// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// var lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
// var upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var numbers = '0123456789';
// var symbols = '!@#$%^&*_-+=';

// function showPrompts() {
//     lowerCase = confirm("Do you want to use lower case letters?");
//     upperCase = confirm("Do you want to use upper case letters?");
//     numbers = confirm("Do you want to use numbers?");
//     special = confirm("Do you want to use any special characters?");
//   }