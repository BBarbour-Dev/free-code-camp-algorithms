// Flatten a nested array. You must account for varying levels of nesting.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = [];
  arr.forEach((el, index) => {
    if (Array.isArray(el)) {
      newArr = newArr.concat(steamrollArray(el));
      console.log(newArr);
    } else {
      newArr.push(el);
    }
  });
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
