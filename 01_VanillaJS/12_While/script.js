// While
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

let number = 1;
while (number <= 5) {
    console.log(number + ".text");
    number++;
}
console.log("While skončil.");

let number2 = 1;
let userReques = +(prompt("Kolik se má vypsat čísel?"));
// console.log(userReques);
while (number2 <= userReques) {
    console.log(number2);
    number2++;
}