// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  var newArr = [];
  arr2.forEach((val, index) => {
    const check = arr1.indexOf(val);
    if (check === -1) {
      newArr.push(val);
    }
  });
  arr1.forEach((val, index) => {
    const check = arr2.indexOf(val);
    if (check === -1) {
      newArr.push(val);
    }
  });
  console.log(newArr);
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
