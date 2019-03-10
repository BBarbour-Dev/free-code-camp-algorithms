// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  const regexOne = /([a-z])([A-Z])/g;
  const regexTwo = /[_\s]/g;
  return str
    .replace(regexOne, "$1" + "-" + "$2")
    .replace(regexTwo, "-")
    .toLowerCase();
}

// spinalCase("This Is Spinal Tap");
console.log(spinalCase("thisIsSpinalTap"));
// spinalCase("Teletubbies say Eh-oh");
//spinalCase("The_Andy_Griffith_Show");
console.log(spinalCase("AllThe-small Things"));
