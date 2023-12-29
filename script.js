//! Prompt user to...
  //! Choose a password length (must be within 8-129 characters)
    //! Must be within 8-129 characters
  //! If they want uppercase
  //! If they want lowercase
  //! If they want numbers
  //! If they want symbols

//! Need a variable for...
  //! Holding the user's choice
    //! Choice: uppercase, lowercase, symbols, numbers

//! Generate random characters that are between 8-128

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
const password = generatePassword();
const passwordText = document.querySelector("#password");

passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//! Starting HW

//length of password, user enter, which is 8-128.
//empty STRING that gets filled by the users slected password amount.
let confirmLength = "";

//ARRAYS that are going to be used to generate the password
// let numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
// let symbols = ("~", "!", "@", "#", "$", "$", "%", "&", "*", "-", "_", "+","=");
// let lowercase = ("a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
// let uppercase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

let numbers = (123456789);
let symbols = ("~!@#$%&*-_+=<>");
let lowercase = ("abcdefghijklmnopqrstuvwxyz");
let uppercase = ("ABCDEFGHIJKLMNOPQRSTUVQXYZ");


// VARIABLES the user picks from 
let confirmNumbers
let confirmSymbols
let confirmLowercase
let confirmUppercase

function generatePassword() {
  alert("Please create a password");
  confirmLength = prompt("Please enter a password between 8-128 characters long");
  while (confirmLength <= 7 || confirmLength >= 129) {
  //function will loop until user chooses a password between 8-128
  confirmLength = prompt (`${confirmLength} does not meet requirements. Please choose between 8-128 characters`)
}
alert (`Your password will have ${confirmLength} characters`);

//empty VARIABLE STRING that will get filled once user confrims selection(s)
let passwordCharacters = "";

confirmNumbers = confirm("Do you want numbers in your password?");

  if (confirmNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers)
  } else {
    alert("Numbers will not be used")
    }
  
  confirmSymbols = confirm("Do you want symbols in your password?");

  if (confirmSymbols) {
    passwordCharacters = passwordCharacters.concat(symbols)
  } else {
    alert("Symbols will not be used")
    }
  
  confirmLowercase = confirm("Do you want lowercase letters in your password?");

  if (confirmLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercase)
  } else {
    alert("Lowercase letters will not be used")
    }
  
  confirmUppercase = confirm("Do you want uppercase letters in your password?");

  if (confirmUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercase)
  } else {
    alert("Uppercase letters will not be used")
    }
    //if user selects none of the VARIABLES, user will get an alert.
  if (confirmNumbers === false && confirmSymbols === false && confirmLowercase === false && confirmUppercase === false) {
    //No loop in place to take user back to the original options if no paramaters are selected. Will fix!
    alert("You must select at least one character set.")
  }

  //empty STRING that is filled by the random password generated, which will be used in the FOR LOOP. 
  let randomPassword = "";

  
  for (let i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
    console.log(passwordCharacters)

    }
    return randomPassword;
}

