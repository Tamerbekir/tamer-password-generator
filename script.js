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

//arrays for the user to pick from
let numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
let symbols = ("~", "!", "@", "#", "$", "$", "%", "&", "*", "-", "_", "+","=");
let lowercase = ("a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
let uppercase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

//length of password, user enter, which is 8-128
let length = " ";

let passwordCharacters = []

let randomPassword = " "


function generatePassword() {
    alert("Please create a password");
    length = prompt("Please enter a password between 8-128 characters long");
    while (length <= 7 || length >= 129) 
    //function will loop until user chooses a password between 8-128
    length = prompt (`${length} does not meet requirements. Please choose between 8-128 characters`)
    alert (`Your password will have ${length} characters`); 

if (numbers) {
confirm("Click OK to confirm if you would like to include numbers");
  passwordCharacters = passwordCharacters.random(numbers)}

if (symbols) {
confirm("Click OK to confirm if you would like to include symbols"); 
  passwordCharacters = passwordCharacters.random(symbols)}
  
if (lowercase) {
confirm("Click OK to confirm if you would like to include lowercase characters"); 
  passwordCharacters = passwordCharacters.random(lowercase)}

if (uppercase) {
confirm("Click OK to confirm if you would like to include uppercase characters"); 
    passwordCharacters = passwordCharacters.random(uppercase)}


console.log(passwordCharacters)

for (let i = 0; i < length; i++){
randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

console.log(randomPassword) }

alert("Here is your new passsowrd! Refresh the page if you would like a new generated password. Otherwise, do not forget to copy!")
return randomPassword;
}
