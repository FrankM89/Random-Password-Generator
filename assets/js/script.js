// Assignment code here

// Variables for password generator
var generateBtn = document.querySelector("#generate");
var passwordBase = "";
var numbers = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();

var password = [];

// Funciton for password generator
function generatePassword() {
  console.log("Click the button");

  // Prompts user with questions about generating password options
  var length = prompt(
    "How many characters will your password be? Enter a number between 8 and 128"
  );
  console.log(length);

  // If statement for password, is at least 8 or up to 128 characters
  if (length < 8 || length > 128) {
    // Prompts user on password length requirements
    alert("Your password must be between 8 and 128 characters");
    return generatePassword();
  }

  // These prompt the user on what characters they want to use
  // Lowercase letters
  var wantLower = confirm("Do you want to use lowercase?");
  console.log(wantLower);
  if (wantLower == true) {
    // For loop for inputing lowercase letters, if selected
    for (var i = 0; i < lowerCase.length; i++) {
      password.push(lowerCase[i]);
    }
  }
  // Uppercase letters
  var wantUpper = confirm("Do you want to use uppercase?");
  console.log(wantUpper);
  if (wantUpper == true) {
    // For loop for inputing uppercase letters, if selected
    for (var i = 0; i < upperCase.length; i++) {
      password.push(upperCase[i]);
    }
  }
  // Special characters
  var wantSpecial = confirm("Do you want to use special charaters?");
  console.log(wantSpecial);
  if (wantSpecial == true) {
    // For loop for inputing special characters, if selected
    for (var i = 0; i < specialCharacters.length; i++) {
      password.push(specialCharacters[i]);
    }
  }
  // Numbers
  var wantNumber = confirm("Do you want to use numbers?");
  console.log(wantNumber);
  if (wantNumber == true) {
    // For loop for inputing numbers, if selected
    for (var i = 0; i < numbers.length; i++) {
      password.push(numbers[i]);
    }
  }

  // Console logs password
  console.log(password);

  // For loop for desired password length and characters
  for (var i = 0; i < length; i++) {
    passwordBase =
      passwordBase + password[Math.floor(Math.random() * password.length)];
  }

  return passwordBase;
}

// Writes password to the #password(id) text-area input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Adds event listener to "Generate Password" button
generateBtn.addEventListener("click", writePassword);
