// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function destroyer(arr) {
  const args = [...arguments];
  const targets = [];
  args.forEach(target => {
    if (typeof target === "object") {
      return;
    }
    targets.push(target);
  });

  const remaining = [];

  arr.forEach(val => {
    const acquire = targets.indexOf(val);
    if (acquire === -1) {
      remaining.push(val);
    }
  });
  return remaining;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
