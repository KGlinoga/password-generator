
// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log("hello")
console.log(generateBtn)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  console.debug("testing write password")
  var password = generatePassword();
  var passwordTextEl = document.querySelector("#password");

  passwordTextEl.value = password;

}

function generatePassword() {

  const params = getParameters();
  if (!params) return "";

  const nums = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const specialChars = "!@#$%^&*()";
  let setOfChars = "";
  let password = "";

  if (params.hasLowerCaseChar) setOfChars += lowerCase;
  if (params.hasUpperCaseChar) setOfChars += upperCase;
  if (params.hasNumericChar) setOfChars += nums;
  if (params.hasSpecialChar) setOfChars += specialChars;

  for (let i = 0; i < params.length; i++) {
    
    // generate random number between 0 and length of setOfChars
    const randomIndex = Math.floor(Math.random()*setOfChars.length);    
    password += setOfChars[randomIndex]
  }




  return password
}


function getParameters() {


  const inputString = prompt("Enter the length of the password");
  const length = parseInt(inputString);
  if (Number.isNaN(length) || length < 8 || length > 128) {
    alert("Length should be a number between 7 and 129.");
    return null;
  }
  // add characters to availableCharacters via user input
  const hasSpecialChar = confirm("Do you want special characters?")
  const hasNumericChar = confirm("Do you want numeric characters?")
  const hasUpperCaseChar = confirm("Do you want uppercase characters?")
  const hasLowerCaseChar = confirm("Do you want lowercase characters?")

  if (!hasSpecialChar && !hasNumericChar && !hasUpperCaseChar && !hasLowerCaseChar) {
    alert("Password needs at least one option selected");
    return null;
  }
  return { length, hasSpecialChar, hasNumericChar, hasUpperCaseChar, hasLowerCaseChar };

}