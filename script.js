// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

// Declaring arrays used to contain characters for password

let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let characters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
let result = [];
let final = [];

// Prompting the user for password criteria

let charLength = prompt ("How many characters would you like in your password.  Must be between 8 and 128.");
let lowerCaseP = confirm ("Would you like your password to contain lower case letters?");
let upperCaseP = confirm ("Would you like your password to contain upper case letters?");
let numbersP = confirm ("Would you like your password to contain numbers?");
let charactersP = confirm ("Would you like your password to contain special characters?");

// Combining user selected criteria for password.

if (lowerCaseP = true) {
  result = result.concat(lowerCase);
}
if (upperCaseP = true) {
  result = result.concat(upperCase);
}
if (numbersP = true) {
  result = result.concat(numbers);
}
if (chactersP = true) {
  result = result.concat(characters);
}

// Selecting characters randomly based off users input and selections

for (var i = 0; i < charLength; i++) {
  final.push (result[Math.floor(Math.random() * result.length)]);
}
return final.join("") ;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
