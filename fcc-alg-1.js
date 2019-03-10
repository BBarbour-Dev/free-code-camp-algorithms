// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
  if (arr[0] < arr[1]) {
    const diff = arr[1] - arr[0];
    let sum = arr[1];
    for (let i = diff; i > 0; i--) {
      let val = arr[1] - i;
      sum += val;
    }
    return sum;
  }
  if (arr[0] > arr[1]) {
    const diff = arr[0] - arr[1];
    let sum = arr[0];
    for (let i = diff; i > 0; i--) {
      let val = arr[0] - i;
      sum += val;
    }
    return sum;
  }
}

console.log(sumAll([4, 1]));
