// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function dropElements(arr, func) {
  // Drop them elements.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr = arr.slice(i);
      break;
    }
  }
  return newArr;
}

dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

dropElements([0, 1, 0, 1], function(n) {
  return n === 1;
});

dropElements([1, 2, 3, 9, 2], function(n) {
  return n > 2;
});
