// Assignment code here
var getPasswordLength = function () {
  var answer = prompt(
    "Please set the preferred length of your password min 8 max 125 characters."
  );
  if (answer >= 8 && answer <= 125) {
    return answer;
  }
  return getPasswordLength(answer);
};
var getCharacterTypes = function () {};
var generatePassword = function () {
  // length of password
  var lengthPassword = getPasswordLength();
  // character types
  var characterTypes = getCharacterTypes();
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
