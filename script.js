

// ask about how many characters

// what type of data type is good for special characters?

alert ("How many characters?")

function getRandomNumber() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
//code here

  var x = getRandomNumber(0,100);


return
}

function askHowManyCharacters(){


  askAboutSpecialCharacters()
}


function askAboutSpecialCharacters(){

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
