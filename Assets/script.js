// Assignment code here
var passwordLength;
var haveLowercase;
var haveUppercase;
var haveNumbers;
var haveSpecialCharTypes;

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
  }
  return answer;
};
var validateType = function (charAnswers) {
  for (var i = 0; i < charAnswers.length; i++) {
    if (charAnswers[i] === "yes") {
      return true;
    }
  }
  alert(
    "You must include one of the following lowercase, uppercase, numeric, and/or special characters"
  );
  return false;
};
var CreatePassword = function () {
  var validChars = [];
  if (haveLowercase === 'yes') {
    const newArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
     'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     validChars = validChars.concat(newArray);
  }
  if (haveUppercase === 'yes') {
    const newArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    validChars = validChars.concat(newArray);
  }
  if (haveNumbers === 'yes') {
    const newArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    validChars = validChars.concat(newArray);
  }
  if (haveSpecialCharTypes === 'yes') {
    const newArray = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-',
    '.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']
    validChars = validChars.concat(newArray);
  }
  var newPassword = ""
  for(var i = 0; i < passwordLength;i++){
    newPassword += validChars[Math.floor(Math.random() * validChars.length)];
  }
  return newPassword;
};
var generatePassword = function () {
  // length of password
  passwordLength = getPasswordLength();
  // set isValidate to false
  var isValidated = false;
  while (!isValidated) {
    //lowercase type
    var lowercasePrompt =
      "Do you want your password to have lowercase letters, type:YES or NO";
    haveLowercase = getCharacterTypes(lowercasePrompt);
    //uppercase type
    var uppercasePrompt =
      "Do you want your password to have uppercase letters, type:YES or NO";
    haveUppercase = getCharacterTypes(uppercasePrompt);
    // number type
    var numberPrompt =
      "Do you want your password to have numbers, type:YES or NO";
    haveNumbers = getCharacterTypes(numberPrompt);
    // special character type
    var specialCharPrompt =
      "Do you want your password to have special characters, type:YES or NO";
    haveSpecialCharTypes = getCharacterTypes(specialCharPrompt);
    // array of answers
    var characterTypeAnswers = [
      haveLowercase,
      haveUppercase,
      haveNumbers,
      haveSpecialCharTypes,
    ];
    isValidated = validateType(characterTypeAnswers);
  }
  return CreatePassword();
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
