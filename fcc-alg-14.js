// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function smallestCommons(arr) {
  arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
  let [alpha, beta] = arr;

  while (alpha < arr[1]) {
    if (beta % alpha === 0) {
      alpha++;
    } else {
      beta += arr[1];
      alpha = arr[0];
    }
  }
  return beta;
}
console.log(
  smallestCommons([1, 3]),
  smallestCommons([1, 5]),
  smallestCommons([2, 10]),
  smallestCommons([1, 13])
);
