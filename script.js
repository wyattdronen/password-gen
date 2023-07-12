
// ask about how many characters

// Get references to the generate element
var generateBtn = document.querySelector("#generate");

// Write password to the password input
function writePassword() {
  let passwordText = document.querySelector("#password");
  
  //Length
  let length = Number(prompt("password length, 8-128 characters."))
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters!");
  }
  //character types
  let charType = prompt("What to include in the password? Type 'uppercase, lowercase, numbers, symbols' to include. ")
  
  passwordText.value = password(length, charType);
  
  
  
    

  function password(length, charType) {
    let charGen = {
      lowercase: 'abcdefghijklmnop',
      uppercase: 'ABCDEFGHIJKLMNOP',
      numbers: '0123456789',
      symbols: '!@#$%^&*()-_=+',
    };
    
    
    var charTypes = charType.toLowerCase().split(', ');
    charSet = "";
    for(var i=0; i < charTypes.length; i++) {
      charSet += charGen[charTypes[i]];
    }
    
    console.log(charSet);

    var retVal = "";
      
    for (var i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
      
    }
    return retVal;
  }
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  document.getElementById("password").select();
  navigator.clipboard.writeText(copyText.value);
  alert("Password copied to clipboard!" + copyText.value);
}


// what type of data type is good for special characters?
