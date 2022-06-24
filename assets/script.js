var length;
var availableCharacters = "";
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var password = ""
  // 1. prompt user for parameters
  // length, special chars, numbers, uppercase, lowercase
  var parameters = getParameters();

  // 2. create random from password from available characters
  // for loop run the number of times that user sets length to
  // add random character to password string
  for (i=0; i<parameters.length; i++) {
    // add 1 random character to password
  }


  return password
}


function getParameters() {
    // set lenght via prompt
    // var parameters = {
    //   length: 0,
    //   availableChars: "1234567890abcdefghijklmnop" **OR do we do random letters?? lol I couldn't really tell from the demo
 //   }
  lenth = prompt()
  if (length<8) {

  }
    // add characters to availableCharacters via user input

    //return parameters
}