let someNum = 5.624834;

// .toFixed();
console.log(someNum.toFixed(3));

// .toString();
console.log(someNum);
console.log(someNum.toString());

// Number.isInteger(); => Zjistíme jestli je číslo celé
console.log(Number.isInteger(someNum)); // false
console.log("----------");

let stringNum = "5.624834";
let string = "pes";

// Number.parseFloat();
console.log(stringNum); // "5.624834"
console.log(Number.parseFloat(stringNum)); // 5.624834
console.log(Number.parseFloat(string)); // NaN => Not a Number
console.log("---------");

// Number.parseInt();
console.log(stringNum); // "5.624834"
console.log(Number.parseInt(stringNum)); // 5
console.log(Number.parseInt(string)); // NaN => Not a Number