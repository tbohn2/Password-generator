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

let lcArray = [...Array(26)]
let x = 97
for (let i = 0; i < lcArray.length; i++) {
  lcArray[i] = String.fromCharCode(x)
  x++
}
let lc = lcArray.join("")

let ucArray = [...Array(26)]
let y = 65
for (let i = 0; i < ucArray.length; i++) {
  ucArray[i] = String.fromCharCode(y)
  y++
}
let uc = ucArray.join("")
console.log(uc);

let numbers = "0123456789"
let special = "/?.,<>';:~_"
// let password = ""

function generatePassword() {
  let password = ""
  let charset = ""
  let prompt1 = prompt("Do you want to include lowercase? yes/no").toLowerCase()
  if (prompt1 === "yes") {
    charset = charset.concat(lc)
    console.log(charset)
  }
  else if (prompt1 === "no") {
    console.log("no!");
  }
  let prompt2 = prompt("Do you want to include uppercase? yes/no").toLowerCase()
  if (prompt2 === "yes") {
    charset = charset.concat(uc)
    console.log(charset)
  }
  else if (prompt2 === "no") {
    console.log("no!");
  }
  let prompt3 = prompt("Do you want to include numbers? yes/no").toLowerCase()
  if (prompt3 === "yes") {
    charset = charset.concat(numbers)
    console.log(charset)
  }
  else if (prompt3 === "no") {
    console.log("no!");
  }
  let prompt4 = prompt("Do you want to include special characters? yes/no").toLowerCase()
  if (prompt4 === "yes") {
    charset = charset.concat(special)
    console.log(charset)
  }
  else if (prompt4 === "no") {
    console.log("no!");
  }

  let prompt5 = prompt("How long do you want the password? 8-128")
  if (prompt5 >= 8 && prompt5 <= 128) {
    length = prompt5
    console.log(length);
  }
  else {
    alert("Password must be 8 to 112 characters")
    return password = "Password must be 8 to 112 characters. Try again."
  }

  if (charset.length === 0) {
    alert("Must select at least one character set")
    return password = "Must select at least one character set. Try again."
  }

  for (var i = 0; i < length; i++) {
    var code = charset.charAt(Math.floor(Math.random() * charset.length));
    password += code.toString();
    console.log(password);




  }
  return password
}







// // Example usage:
// var password = generatePassword(12); // Generates a password with 12 characters
// console.log(password);

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

