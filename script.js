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

//length of password, which user will enter when prompt, which needs to be between 8-128.
//empty STRING that gets filled by the users slected password amount.
let confirmLength = "";

//STRINGS that are going to be used to generate the password
let numbers = (1234567890);
let specialChars = ("~!@#$%&*-_+=<>");
let lowercase = ("abcdefghijklmnopqrstuvwxyz");
let uppercase = ("ABCDEFGHIJKLMNOPQRSTUVQXYZ");


// VARIABLES the user picks from when confirming
let confirmNumbers
let confirmSpecialChars
let confirmLowercase
let confirmUppercase

function generatePassword() {
  alert("Welcome to the Password Generator! Please follow the prompts to generate a unique password.");
  
  confirmLength = prompt("Please enter a password between 8-128 characters.");
  while (confirmLength <= 7 || confirmLength >= 129) {
    //function will loop until user chooses a password between 8-128
    confirmLength = prompt (`${confirmLength} does not meet requirements. Please try again using 8-128 characters only.`)
  }
  
  alert (`Your password will have ${confirmLength} characters.`);
  
  //empty VARIABLE STRING that will get filled once user confrims selection(s)
  let passwordCharacters = "";

confirmNumbers = confirm("Would you like your password to include numbers? If no, please press cancel.");
  if (confirmNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers)
    alert("Numbers will be included.")
  } else {
    alert("Numbers will not be included.")
  }
  

confirmSpecialChars = confirm("Would you like your password to include special characters? If no, please press cancel.");
  if (confirmSpecialChars) {
    passwordCharacters = passwordCharacters.concat(specialChars)
    alert("Special characters will be included.")
  } else {
    alert("Special characters will not be included.")
  }
  

confirmLowercase = confirm("Would you like your password to include lowercase chracters? If no, please press cancel.");
  if (confirmLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercase)
    alert("Lowercase letters will be included.")
  } else {
    alert("Lowercase letters will not be included.")
  }
  

confirmUppercase = confirm("Would you like your password to include uppercase characters? If no, please press cancel.");
  if (confirmUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercase)
    alert("Uppercase letters will be included.")
  } else {
    alert("Uppercase letters will not be included.")
  }
    

  // If user selects not a set of the VARIABLES, user will get an alert.
  //// No loop in place to take user back to the original options if no paramaters are selected. Comes back UNDEFINDED. Will fix!
  // Fixed issue with function not looping by using RETURN so the user will now have the option to generate a new password without refreshing the page.
  if (confirmNumbers === false && confirmSpecialChars === false && confirmLowercase === false && confirmUppercase === false) {
  alert("No characters selected! You must select at least one character set. Please try again by generating a new password.")
  {return("No characters selected. Please try again.")}
  }
  
  alert("This is your new password! Do not forget to copy it!")

  
// Empty STRING that is filled by the random password generated, which will be used in the FOR LOOP. 
let randomPassword = "";

for (let i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
    console.log(passwordCharacters)
    }
    return randomPassword;
}

