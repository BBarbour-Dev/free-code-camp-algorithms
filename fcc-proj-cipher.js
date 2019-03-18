// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function rot13(str) {
  // LBH QVQ VG!
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let decrypted = "";
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    const nonAlpha = /[\W\d\s]/;
    if (currentLetter.match(nonAlpha)) {
      decrypted += currentLetter;
    } else {
      const currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + 13;
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      // console.log(newIndex);
      decrypted += alphabet[newIndex];
    }
  }
  console.log(decrypted);
  return decrypted;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
