let lcArray = [...Array(26)]
let x = 97
for (let i = 0; i < lcArray.length; i++) {
  lcArray[i] = String.fromCharCode(x)
  x++
}
var lc = lcArray.toString
console.log(lc);

let upArray = [...Array(26)]
let y = 65

for (let i = 0; i < upArray.length; i++) {
  upArray[i] = String.fromCharCode(y)
  y++
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let special = ["/", "?", ".", ",", "<", ">", "'", ";", ":", "~", "_"]
let length = password.length
let charset = "mary"
// let criteria1 = 
// let criteria2 = prompt("Do you want to include uppercase? Yes/No")
// let criteria3 = prompt("Do you want to include numbers? Yes/No")
// let criteria4 = prompt("Do you want to include special character? Yes/No")
// let criteria5 = prompt("How long do you want the password? 8-128")

let prompt1 = (tolowercase(prompt("Do you want to include lowercase? yes/no")))
if (prompt1 === "yes") {
  charset = (charset + lcArray)

}
else if (prompt1 === "no") { }
// while (prompt1 != "yes", "no") {
// (prompt("Do you want to include lowercase? yes/no").tolowercase)
// }
console.log(charset);


function generatePassword() {


}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

String.trim
String.tolowercase

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated

