function addTogether() {
  const args = [].slice.call(arguments);
  const numCheck = args.every(el => {
    return typeof el === "number" ? true : false;
  });
  if (!numCheck) return undefined;
  if (args.length === 2) {
    return args[0] + args[1];
  } else {
    return function addTwo(num) {
      return typeof num === "number" ? args[0] + num : undefined;
    };
  }
}

console.log(
  addTogether(2, 3),
  addTogether(2)([3])
  // addTogether("http://bit.ly/IqT6zt")
);
