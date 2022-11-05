"use strict";
console.log("main.js");

// DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("demo");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Event listeners

generateEl.addEventListener("click", () => {
  const length = +slider.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});
// copy password to clipboard

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  //   document.execCommand("copy");
  navigator.clipboard.writeText("text to be copied");
  textarea.remove();
  alert("Password copied to clipboard");
});
// Generate password function

function generatePassword(lower, upper, number, symbol, length) {
  // 1. Init password variables
  // 2. Filter out unchecked types
  // 3. Loop over length and call generator function for each type
  // 4. Add final password to the passw variable and return it

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  //   console.log("typesArr ===", typesArr);

  if (typesCount === 0) {
    return "";
  }

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}
// Generator functions
// https://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//console.log("getRandomLower() ===", getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//console.log("getRandomUpper() ===", getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//console.log("getRandomNumber() ===", getRandomNumber());

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>,./";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
//console.log("getRandomSymbol() ===", getRandomSymbol());

// range button value and other fun things

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
