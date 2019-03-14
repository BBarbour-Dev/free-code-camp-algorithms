// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumPrimes(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime === true && i > 1) {
      arr.push(i);
    }
  }
  const sum = arr.reduce((a, b) => a + b);
  return sum;
}

sumPrimes(977);
sumPrimes(10);
