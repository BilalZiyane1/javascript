//Random password generator

function generatePassword(passwordlength,includeLowercase,includeUppercase,includeNumbers,includeSymbols) {
  const lowercase ="abcdefghijklmnopqrstuvwxyz"
  const uppercase = lowercase.toUpperCase()
  const numbers = "0123456789"
  const symbols = "!@#$%^&*()_+~=`[]{}'\/.,?><|"
  
  let allowechars ="";
  let password = "";
  
  allowechars+= includeLowercase ?lowercase : "";
  allowechars+= includeUppercase ?uppercase : "";
  allowechars+= includeNumbers ? numbers :"";
  allowechars+= includeSymbols ? symbols : "";

  if(passwordlength <= 0){
    return `password length must be at least 1`
  }
  if(allowechars.length ===0){
    return `at least one password must be selected`
  }

  for(let i=1 ; i<passwordlength ; i++){
    const randomindex = Math.floor(Math.random()* allowechars.length)
    password+=allowechars[randomindex]
  }
  
  return password;
}



const passwordlength = 12
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true

const generatedPassword= generatePassword(passwordlength,
                          includeLowercase,includeUppercase,
                          includeNumbers,
                          includeSymbols)
                          
console.log(`the generated password is" ${generatedPassword} "`)