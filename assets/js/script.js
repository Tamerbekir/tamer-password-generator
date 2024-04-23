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
  alert(`Welcome to the Password Generator! Please follow the 
    prompts to generate a unique password.`);
  
  confirmLength = prompt(`Please enter a password length between 
    8-128 characters.`);

  while (confirmLength <= 7 || confirmLength >= 129) {
    //function will loop until user chooses a password between 8-128
    confirmLength = prompt (`${confirmLength} does not meet requirements. 
    Please try again using 8-128 characters only.`)
  }
  
  alert (`Your password will have ${confirmLength} characters.`);
  
  //empty VARIABLE STRING that will get filled once user confrims selection(s)
  let passwordCharacters = "";

confirmNumbers = confirm(`Would you like your password to include 
  numbers? If no, please press cancel.`);

  if (confirmNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers)
  } else {
    alert("Numbers will not be included.")
  }
  

confirmSpecialChars = confirm(`Would you like your password to include 
  special characters? If no, please press cancel.`);

  if (confirmSpecialChars) {
    passwordCharacters = passwordCharacters.concat(specialChars)
  } else {
    alert("Special characters will not be included.")
  }
  

confirmLowercase = confirm(`Would you like your password to include lowercase 
  characters? If no, please press cancel.`);

  if (confirmLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercase)
  } else {
    alert("Lowercase letters will not be included.")
  }
  

confirmUppercase = confirm(`Would you like your password to include uppercase 
  characters? If no, please press cancel.`);

  if (confirmUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercase)
  } else {
    alert("Uppercase letters will not be included.")
  }
    

  // If user selects not a set of the VARIABLES, user will get an alert.
  if (confirmNumbers === false && confirmSpecialChars === false 
      && confirmLowercase === false && confirmUppercase === false) {

  alert(`No characters selected! You must select at least one character 
    set. Please try again by generating a new password.`)

  {return("No characters selected. Please try again.")}
  }
  
  alert("This is your new password! Do not forget to copy it!")

  
// Empty STRING that is filled by the random password generated, which will be used in the FOR LOOP. 
let randomPassword = "";

for (let i = 0; i < confirmLength; i++) {
    randomPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
    console.log(passwordCharacters)
    }
    return randomPassword;
}

