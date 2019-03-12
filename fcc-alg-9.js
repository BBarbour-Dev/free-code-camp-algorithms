// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function fearNotLetter(str) {
  const charArr = str.split("");
  const fullArr = [];
  for (let i = 0; i <= charArr.length - 1; i++) {
    if (i === 0) {
      fullArr.push(charArr[0]);
    } else {
      const previousIndex = i - 1;
      const previousCode = fullArr[previousIndex].charCodeAt();
      const nextCode = previousCode + 1;
      fullArr.push(String.fromCharCode(nextCode));
    }
  }
  console.log(fullArr);
  for (let i = 0; i <= fullArr.length; i++) {
    if (fullArr[i] !== charArr[i]) {
      return fullArr[i];
    }
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
