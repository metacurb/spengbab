require("dotenv").config();

const spengbab = str => String(str)
  .trim()
  .toLowerCase()
  .split('')
  .map(char => {
    if (!/[a-zA-Z]/.test(char)) return char;
    const newChar = previousUpper ? char.toLowerCase() : char.toUpperCase();
    previousUpper = !previousUpper;
    return newChar;
  }).join('');

// Initializes your app with your bot token and signing 
exports.handler = (event, context) => {
  console.log(event, context)
}

