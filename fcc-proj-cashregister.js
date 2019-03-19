// Design a cash inDrawer drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a changeDue key.

// Return {status: "INSUFFICIENT_FUNDS", changeDue: []} if cash-in-drawer is less than the changeDue due, or if you cannot return the exact changeDue.

// Return {status: "CLOSED", changeDue: [...]} with cash-in-drawer as the value for the key changeDue if it is equal to the changeDue due.

// Otherwise, return {status: "OPEN", changeDue: [...]}, with the changeDue due in coins and bills, sorted in highest to lowest order, as the value of the changeDue key.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// function checkCashRegister(price, cash, cid) {
//   // Here is your changeDue, ma'am.
//   const cashValues = [
//     {
//       name: "ONE HUNDRED",
//       value: 100.0
//     },
//     {
//       name: "TWENTY",
//       value: 20.0
//     },
//     {
//       name: "TEN",
//       value: 10.0
//     },
//     {
//       name: "FIVE",
//       value: 5.0
//     },
//     {
//       name: "DOLLAR",
//       value: 1.0
//     },
//     {
//       name: "QUARTER",
//       value: 0.25
//     },
//     {
//       name: "DIME",
//       value: 0.1
//     },
//     {
//       name: "NICKEL",
//       value: 0.05
//     },
//     {
//       name: "PENNY",
//       value: 0.01
//     }
//   ];

//   let result = { status: null, changeDue: [] };

//   const changeDue = cash - price;

//   const inDrawer = cid.reduce((acc, next) => {
//     return acc + next;
//   }, 0);

//   if (inDrawer === changeDue) {
//     return {
//       status: "CLOSED",
//       changeDue: []
//     };
//   }

//   if (inDrawer < changeDue) {
//     return {
//       status: "INSUFFICIENT_FUNDS",
//       changeDue: []
//     };
//   }

//   const changeArr = cashValues.reduce((acc, next) => {
//     let value = 0;
//     while (inDrawer[next.name] > 0 && changeDue > next.value) {
//       changeDue -= next.value;
//       inDrawer[next.name] -= next.value;
//       value += next.value;
//       changeDue = Math.round(changeDue * 100) / 100;
//     }
//     if (value > 0) {
//       acc.push([next.name, value]);
//     }
//     return acc;
//   }, []);

//   if (changeArr.length < 1 || changeDue > 0) {
//     return {
//       status: "INSUFFICIENT_FUNDS",
//       changeDue: []
//     };
//   }
//   return {
//     status: "OPEN",
//     changeDue: changeArr
//   };
// }

function checkCashRegister(price, cash, cid) {
  const cashValues = [
    { name: "ONE HUNDRED", value: 100 },
    { name: "TWENTY", value: 20 },
    { name: "TEN", value: 10 },
    { name: "FIVE", value: 5 },
    { name: "ONE", value: 1 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKEL", value: 0.05 },
    { name: "PENNY", value: 0.01 }
  ];
  const result = { status: null, change: [] };
  let changeDue = cash - price;
  const inDrawer = cid.reduce(
    function(acc, next) {
      acc.total += next[1];
      acc[next[0]] = next[1];
      return acc;
    },
    { total: 0 }
  );
  if (inDrawer.total === changeDue) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }
  if (inDrawer.total < changeDue) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  const change_arr = cashValues.reduce(function(acc, next) {
    let value = 0;
    while (inDrawer[next.name] > 0 && changeDue >= next.value) {
      changeDue -= next.value;
      inDrawer[next.name] -= next.value;
      value += next.value;
      changeDue = Math.round(changeDue * 100) / 100;
    }
    if (value > 0) {
      acc.push([next.name, value]);
    }
    return acc;
  }, []);
  if (change_arr.length < 1 || changeDue > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  result.status = "OPEN";
  result.change = change_arr;
  return result;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
  //   checkCashRegister(19.5, 20, [
  //     ["PENNY", 0.01],
  //     ["NICKEL", 0],
  //     ["DIME", 0],
  //     ["QUARTER", 0],
  //     ["ONE", 1],
  //     ["FIVE", 0],
  //     ["TEN", 0],
  //     ["TWENTY", 0],
  //     ["ONE HUNDRED", 0]
  //   ]),
  //   checkCashRegister(3.26, 100, [
  //     ["PENNY", 1.01],
  //     ["NICKEL", 2.05],
  //     ["DIME", 3.1],
  //     ["QUARTER", 4.25],
  //     ["ONE", 90],
  //     ["FIVE", 55],
  //     ["TEN", 20],
  //     ["TWENTY", 60],
  //     ["ONE HUNDRED", 100]
  //   ])
);
