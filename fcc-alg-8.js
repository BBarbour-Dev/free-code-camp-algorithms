// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function pairElement(str) {
  const pairsArr = str.split("");
  const finalArr = [];
  pairsArr.forEach(item => {
    const innerArr = [];

    switch (item) {
      case "G":
        innerArr.push(item, "C");
        break;
      case "C":
        innerArr.push(item, "G");
        break;
      case "A":
        innerArr.push(item, "T");
        break;
      case "T":
        innerArr.push(item, "A");
        break;
      default:
        innerArr.push(item, "failure");
    }
    console.log(innerArr);
    finalArr.push(innerArr);
  });
  return finalArr;
}

// pairElement("GCG");
console.log(pairElement("ATCGA"));
