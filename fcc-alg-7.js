// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function myReplace(str, before, after) {
  const uppercase = /^[A-Z]/;
  if (uppercase.test(before)) {
    const splitAfter = after.split("");
    const capital = splitAfter[0].toUpperCase();
    splitAfter.shift();
    splitAfter.unshift(capital);
    const newAfter = splitAfter.join("");
    return str.replace(before, newAfter);
  } else {
    return str.replace(before, after);
  }
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
