import "../style/main.scss";

export function isTrue() {
  return true;
}

export function capitalize(string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    const letter = i === 0 ? string[i].toUpperCase() : string[i];

    newString += letter;
  }

  return newString;
}

export function reverseString(string) {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
}

export const calculator = (() => {
  function sum(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  return { sum, subtract, multiply, divide };
})();

export function caesarCipher(string, key) {
  let numericString = [];
  let newString = "";

  if (key < 0) {
    key += 26;
  }

  for (let letter of string) {
    let alphabet;
    // Pick which alphabet to use based on letter case
    if (letter.toUpperCase() === letter) {
      alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    } else {
      alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    }

    // find index of current letter
    let index = alphabet.findIndex((value) => value === letter);

    if (index === -1) {
      newString += letter;
      break;
    }

    // encode current letter
    const encodedLetter = (index + key) % 26;
    newString += alphabet[encodedLetter];
  }

  return newString;
}

export function analyzeArray(array) {
  const length = array.length;

  const average =
    array.reduce((sum, currentValue) => {
      return (sum += currentValue);
    }) / array.length;

  let min = null;
  array.forEach((element) => {
    if (!min) {
      min = element;
    } else {
      if (element < min) min = element;
    }
  });

  let max = null;
  array.forEach((element) => {
    if (!max) {
      max = element;
    } else {
      if (element > max) max = element;
    }
  });

  return { length, average, min, max };
}
