// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function translatePigLatin(str) {
  const beginsWithVowlRegex = /^[aeiou]/i;
  const vowelRegex = /[aeiou]/i;
  if (beginsWithVowlRegex.test(str)) {
    return `${str}way`;
  } else if (!str.match(vowelRegex)) {
    return `${str}ay`;
  } else {
    const firstVowel = str.match(vowelRegex).index;
    const beginning = str.slice(0, firstVowel);
    const end = str.slice(firstVowel);
    return `${end}${beginning}ay`;
  }
}

// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("trtdvt"));
// console.log(translatePigLatin("algorithm"), translatePigLatin("eight"));

console.log(translatePigLatin("glove"));
