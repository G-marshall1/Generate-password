//arrays in global

//4 functions needed
//function 1 collects users choices
//function 2 is give random choice
// function 3 generate password
//function 4 is write password

var generateBtn = document.querySelector("#generate");
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharater = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "/",
  "<",
  ">",
  "?",
];
var elementName = ["letter", "charater", "number"];
var randomChar = 0;

function options() {
  //give options
  var passwordLength = parseInt(
    prompt(
      "How many charaters do you want to have? Pick a number betwen 8-128."
    )
  );
  console.log(passwordLength);

  if (isNaN(passwordLength) === true) {
    alert("You must pick a number!");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 charaters");
    return;
  }

  var useLowerCase = confirm(
    "Do you want to uses lower case letters? Click 'Ok' to confirm or 'cancel' to reject."
  );
  console.log(useLowerCase);
  var useUpperCase = confirm(
    "Do you want to uses upper case letters? Click 'Ok' to confirm or 'cancel' to reject."
  );
  console.log(useUpperCase);
  var useSpecialCharater = confirm(
    "Do you want to uses special charaters? Click 'Ok' to confirm or 'cancel' to reject."
  );
  console.log(useSpecialCharater);
  var useNumbers = confirm(
    "Do you want to uses numbers? Click 'Ok' to confirm or 'cancel' to reject."
  );
  console.log(useNumbers);

  //create a conditional statements that checks if they said no to everything
  if (
    useLowerCase === false &&
    useUpperCase === false &&
    useSpecialCharater === false &&
    useNumbers === false
  ) {
    alert("Oh you think you're funny denying all privileges.. 🤬  TRY AGAIN!");
    return;
  }

  //then create object to store the users input
  var usersChoice = {
    passwordLength: passwordLength,
    useLowerCase: useLowerCase,
    useUpperCase: useUpperCase,
    useNumbers: useNumbers,
    useSpecialCharater: useSpecialCharater,
  };

  //retrun object
  return usersChoice;
}

//write the generate password math

// Write password to the #password input
function writePassword() {
  var returnedOptions = options();
  var password = "";
  for (var i = 0; i < returnedOptions.passwordLength; i++) {
    var a = getRandomInt(3);
    var tempEl = elementName[a];
    if (tempEl === "letter" && (returnedOptions.useUpperCase || returnedOptions.useLowerCase)) {
      // generate random letter
      var num = lowerCase.length;
      var b = getRandomInt(num);
      tempEl = lowerCase[b];
      if (returnedOptions.useUpperCase && returnedOptions.useLowerCase) {
        // generate a upper or lower case letter.
        var decision = getRandomInt(2);
        if (decision === 0) {
          password += tempEl;
          continue
        
        } else {
          password += tempEl.toUpperCase();
          continue
        }
      } else if (
        returnedOptions.useUpperCase &&
        !returnedOptions.useLowerCase
      ) {
        // generate upper case only letters
        password += tempEl.toUpperCase();
        continue
      } else {
        // generate lower case only letters
        password += tempEl;
        continue
      } 
    } else if (tempEl === "charater" && returnedOptions.useSpecialCharater) {
      //generate random charater
      var num = specialCharater.length;
      var c = getRandomInt(num);
      tempEl = specialCharater[c];
      password += tempEl;
      continue
    } else if (tempEl === "number" && returnedOptions.useNumbers) {
      //generate random charater
      var tempNum = getRandomInt(10);
        password += tempNum;
        continue
    } else {
      //generate random number
      if (returnedOptions.useNumbers) {
        var tempNum = getRandomInt(10);
        password += tempNum;
        continue
      } if (returnedOptions.useSpecialCharater) {
        var num = specialCharater.length;
      var c = getRandomInt(num);
      tempEl = specialCharater[c];
      password += tempEl;
      continue
      } if (returnedOptions.useLowerCase || returnedOptions.useUpperCase) {
      
          // generate random letter
          var num = lowerCase.length;
          var b = getRandomInt(num);
          tempEl = lowerCase[b];
          if (returnedOptions.useUpperCase && returnedOptions.useLowerCase) {
            // generate a upper or lower case letter.
            var decision = getRandomInt(2);
            if (decision === 0) {
              password += tempEl;
              continue
            } else {
              password += tempEl.toUpperCase();
              continue
            }
          } else if (
            returnedOptions.useUpperCase &&
            !returnedOptions.useLowerCase
          ) {
            // generate upper case only letters
            password += tempEl.toUpperCase();
            continue
          } else {
            // generate lower case only letters
            password += tempEl;
            continue
          }
        
      } 
    }
  }
  console.log(password);
  console.log(password.length);
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  document.getElementById("password").value = password;
}

function getRandomInt(max) {
  // generate random number between 0 and the passed in max number.
  return Math.floor(Math.random() * max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
