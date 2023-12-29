# User Story

AS AN employee with access to sensitive data<br>
I WANT to randomly generate a password that meets certain criteria<br>
SO THAT I can create a strong password that provides greater security<br>

# Acceptance Criteria

GIVEN I need a new, secure password <br>
WHEN I click the button to generate a password<br>
THEN I am presented with a series of prompts for password criteria<br>
WHEN prompted for password criteria<br>
THEN I select which criteria to include in the password<br>
WHEN prompted for the length of the password<br>
THEN I choose a length of at least 8 characters and no more than 128 characters<br>
WHEN asked for character types to include in the password<br>
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters<br>
WHEN I answer each prompt<br>
THEN my input should be validated and at least one character type should be selected<br>
WHEN all prompts are answered<br>
THEN a password is generated that matches the selected criteria<br>
WHEN the password is generated<br>
THEN the password is either displayed in an alert or written to the page<br>

# Description
 This password generator was designed to output random characters using a minimum of 8 and a maximum of 128 characters. The user will be prompt to  to choose what they wish to have their password include- which will be numbers, special characters, lowercase and uppercase letters. The user will have to select at least 1/3 character sets otherwise the password generator will not have an output. The user can generate a new password as much as they wish by clicking the "Generate Password" button found on the page. 

# Screenshot
![Password Generator](<Password Generator Screenshot Tamer.png>)

# Link

<a href="https://tamerbekir.github.io/tamer-password-generator"/> Passord Generator </a>
