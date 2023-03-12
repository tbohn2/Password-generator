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

// Creates an empty array with length of 26
let lcArray = [...Array(26)]
let x = 97
// This for loop fills the array above with lowercase letters by using the corresponding character code starting at 97 for "a"
for (let i = 0; i < lcArray.length; i++) {
  // As the character code (x) increaes by one, a string is created and put into the array at place i starting at 0 to 25
  // for a total of 26 letters
  lcArray[i] = String.fromCharCode(x)
  x++
}

// This for loops works the same as above except the character code starts at 65 for uppercase letters
let ucArray = [...Array(26)]
let y = 65
for (let i = 0; i < ucArray.length; i++) {
  ucArray[i] = String.fromCharCode(y)
  y++
}

// The two arrays above are changed into strings by the .join method, 
// joined together with no space in between the characters, as specified by ("")
let lc = lcArray.join("")
let uc = ucArray.join("")
let numbers = "0123456789"
let special = "/?.,<>';:~_"

function generatePassword() {
  // This makes the password and character set empty each time the Generate Password button is clicked
  let password = ""
  let charset = ""
  // The following four prompts ask the user if they want to include the various charcter sets in creating a random password
  // The .toLowerCase() ensures that if the user answered in uppercase, the input would still be valid
  let prompt1 = prompt("Do you want to include lowercase? yes/no").toLowerCase()
  // If the user answers yes, the corresponding character set is concatenated to the existing charset
  if (prompt1 === "yes") {
    charset = charset.concat(lc)
  }

  let prompt2 = prompt("Do you want to include uppercase? yes/no").toLowerCase()
  if (prompt2 === "yes") {
    charset = charset.concat(uc)
  }

  let prompt3 = prompt("Do you want to include numbers? yes/no").toLowerCase()
  if (prompt3 === "yes") {
    charset = charset.concat(numbers)
  }

  let prompt4 = prompt("Do you want to include special characters? yes/no").toLowerCase()
  if (prompt4 === "yes") {
    charset = charset.concat(special)
  }

  // Asks the user how long they want the password to be
  let prompt5 = prompt("How long do you want the password? 8-128")
  // If the input is between 7 and 129, the length of the password is set to the input
  if (prompt5 >= 8 && prompt5 <= 128) {
    length = prompt5
  }
  // If the input is less than 8 or greater than 128, the user is alerted that it must be 8-112
  else {
    alert("Password must be 8 to 112 characters")
    return password = "Password must be 8 to 112 characters. Try again."
  }

  // If nothing is added to the charset from prompts 1 through 4, making the length of the charset 0,
  // the user is alerted to pick at least one character set
  if (charset.length === 0) {
    alert("Must select at least one character set")
    return password = "Must select at least one character set. Try again."
  }

  // This for loop creates a random string from the charset created from prompts 1 through 4, and that is the length determined in prompt 5
  // This loop repeats until reaching the charset length
  for (var i = 0; i < length; i++) {
    // As i increases by 1 up to charset length, a random number from 0 and less than 1 is generated with Math.random
    // This decimal is multiplied by the charset length, and rounded down to an integer with Math.floor
    // The charAt method finds the character in the string at the spot of the integer, 
    // i.e. the character at the 3rd spot would have an integer value of 2
    var code = charset.charAt(Math.floor(Math.random() * charset.length));
    // Adds each random character to the var password with +=, creating a string
    password += code
  }

  // Displays the random password
  return password
}


