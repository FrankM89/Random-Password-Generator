// Assignment code here

// Variables for password generator
var generateBtn = document.querySelector("#generate");
var passwordBase = ""
var numbers = "0123456789"
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = upperCase.toLowerCase()

var password = [];

// Funciton for password generator
function generatePassword() {
  console.log("Click the button")

// Prompts user with questions about generating password options

var length = prompt("How many characters will your password be? Enter a number between 8 and 128")
console.log(length)

// If statement for password is at least 8 or up to 128 characters
if (length < 8 || length > 128) {


// Prompts user on password length requirements
 alert("Your password must be between 8 and 128");
 return generatePassword()
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);