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
var getCharacterTypes = function (promptQuestion) {
  var answer = "";
  while (answer !== "yes" && answer !== "no") {
    answer = prompt(promptQuestion);
    answer = answer.toLowerCase();
    console.log(answer);
  }
  return answer;
};
var validateType = function (charAnswers) {
  for (var i = 0; i < charAnswers.length; i++) {
    if (charAnswers[i] === "yes" || charAnswers[i] === "no") {
      return true;
    }
  }
  return false;
};
var generatePassword = function () {
  // length of password
  var lengthPassword = getPasswordLength();
  // set isValidate to false
  var isValidated = false;
  while (!isValidated) {
    //lowercase type
    var lowercasePrompt =
      "Do you want your password to have lowercase letters, type:YES or NO";
    var haveLowercase = getCharacterTypes(lowercasePrompt);
    //uppercase type
    var uppercasePrompt =
      "Do you want your password to have uppercase letters, type:YES or NO";
    var haveUppercase = getCharacterTypes(uppercasePrompt);
    // number type
    var numPrompt = "Do you want your password to have numbers, type:YES or NO";
    var haveNumTypes = getCharacterTypes(numPrompt);
    // special character type
    var specialCharPrompt =
      "Do you want your password to have special characters, type:YES or NO";
    var haveSpecialCharTypes = getCharacterTypes(specialCharPrompt);

    // array of answers
    var characterTypeAnswers = [
      haveLowercase,
      haveUppercase,
      haveNumTypes,
      haveSpecialCharTypes,
    ];
    isValidated = validateType(characterTypeAnswers);
  }
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
