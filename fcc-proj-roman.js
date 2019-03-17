// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function convertToRoman(num) {
  const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  const romanNum = [];

  for (let numeral in numerals) {
    if (num >= numerals[numeral]) {
      romanNum.push(numeral.repeat(Math.floor(num / numerals[numeral])));
      num -= numerals[numeral] * Math.floor(num / numerals[numeral]);
    }
  }
  console.log(romanNum.join(""));
  return romanNum.join("");
}

convertToRoman(36);
convertToRoman(44);
