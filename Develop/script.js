// defined all possible charaters in the global scope for a password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharater = "?/!@#$%^&*()_+=\|][';:.,<>`~{}-";
var password = "";



var generateBtn = document.querySelector("#generate");


//need to add a confirm prompt to ask user if they want to use lower case, upper case, number, and special charater.


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
