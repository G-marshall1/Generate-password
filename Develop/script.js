//arrays in global

//4 functions needed
//function 1 collects users choices
//function 2 is give random choice
// function 3 generate password
//function 4 is write password


var generateBtn = document.querySelector("#generate");
var lowerCase = []
var upperCase = [""]
var specialCharater = [""]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function options() {
  //give options 
  var passwordLength = parseInt(prompt("How many charaters do you want to have? Pick a number betwen 8-128."))

  if (isNaN(passwordLength) === true) {
alert("You must pick a number!")
return;
  }


  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 charaters")
    return;
  }

  var useLowerCase = confirm("Do you want to uses lower case letters? Click 'Ok' to confirm or 'cancel' to reject.")
  var useUpperCase = confirm("Do you want to uses upper case letters? Click 'Ok' to confirm or 'cancel' to reject.")
  var useSpecialCharater = confirm("Do you want to uses special charaters? Click 'Ok' to confirm or 'cancel' to reject.")
  var useNumbers = confirm("Do you want to uses numbers? Click 'Ok' to confirm or 'cancel' to reject.")

  //create a conditional statements that checks if they said no to everything


  //then create object to store the users input
var usersChoice = {
  passwordLength: passwordLength,
  useLowerCase: useLowerCase,
  useUpperCase: useUpperCase,
  useNumbers: useNumbers,
  useSpecialCharater:useSpecialCharater
}

  //retrun object
return usersChoice
}

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
options()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



