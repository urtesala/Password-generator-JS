"use strict";
console.log("main.js");

// DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const clipboardEl = document.getElementById("clipboard");

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generator functions
// https://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log("getRandomLower() ===", getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log("getRandomUpper() ===", getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log("getRandomNumber() ===", getRandomNumber());

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>,./";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log("getRandomSymbol() ===", getRandomSymbol());
