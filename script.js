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

// // Assignment Code
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

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwkyz";
let number = "0123456789";
let symbols = "~!@#$%^&*()_+|}{:?><,./;'[]/=-'}";

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols); 


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  okay = confirm('Create a password. Pick between 8-128 characters');       
    if (okay) {
    userChoose();
    } else {
    alert("Cancelled")
    }

    let includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwkyz";
let number = "0123456789";
let symbols = "~!@#$%^&*()_+|}{:?><,./;'[]/=-'}";
  }



const length = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;



//!-----------------------------------------
// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowercaseChars = "abcdefghijklmnopqrstuvwkyz";
//     const numberChars = "0123456789";
//     const symbolsChars = "~!@#$%^&*()_+|}{:?><,./;'[]/=-'}";

//     let allowedChars = " ";
//     let password = " ";

//     allowedChars += includeLowercase ? lowercaseChars : " ";
//     allowedChars += includeUppercase ? uppercaseChars : " ";
//     allowedChars += includeSymbols ? symbolsChars : " ";
//     allowedChars += includeNumbers ? numberChars : " ";

//     if(length <= 0){
//       return ('password length must be at least 1')
//     }
//     if(allowedChars.length === 0){
//       return "(at least 1 set of characters needs to be selected)"
//     }

//     for(let i = 0; i < length; i++){
//       const randomIndex = Math.floor(Math.random() * allowedChars.length)
//       password += allowedChars[randomIndex]
//     }

//     return password;
//   }


// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols); 

// console.log(`generated password: ${password}`)
