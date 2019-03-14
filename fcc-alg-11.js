// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// function convertHTML(str) {
//   // &colon;&rpar;
//   const ampReg = /[\][&]/g;
//   const leftBrac = /[\][<]/g;
//   const rightBrac = /[\][>]/g;
//   const singleQuot = /[\][']/g;
//   const doubleQuot = /[\]["]/g;
//   const newStr = str
//     .replace(ampReg, "&amp;")
//     .replace(leftBrac, "&​lt;")
//     .replace(rightBrac, "&​gt;")
//     .replace(singleQuot, "&​apos;")
//     .replace(doubleQuot, "&​quot;");
//   return newStr;
// }

function convertHTML(str) {
  let arr = str.split("");
  arr.forEach((val, ind) => {
    switch (val) {
      case "&":
        arr[ind] = "&amp;";
        break;
      case "<":
        arr[ind] = "&​lt;";
        break;
      case ">":
        arr[ind] = "&​gt;";
        break;
      case "'":
        arr[ind] = "&​apos;";
        break;
      case '"':
        arr[ind] = "&​quot;";
        break;
    }
  });
  console.log(arr.join(""));
  return arr.join("");
}

console.log(
  convertHTML("Dolce & Gabbana"),
  convertHTML("Hamburgers < Pizza < Tacos"),
  convertHTML("Schindler's List")
);
