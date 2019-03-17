// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];
  arr.forEach(el => {
    let t = Math.round(
      Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM) * 2 * Math.PI
    );
    let newObj = { name: el.name, orbitalPeriod: t };
    newArr.push(newObj);
    newObj = {};
  });
  console.log(newArr);
  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]);
