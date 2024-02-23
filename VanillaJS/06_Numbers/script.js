// Number

// int, integer => Celá čísla
let ageUser = 22;
let bonusDiscount = -20;
console.log(`Věk účastníka je: ${ageUser}`);

// Float nebo double => Desetinná čísla
let outsideTemp = 25.8;
let internalTemp = -4.7;

// +, -, /, *
console.log(ageUser + 5); // 27
console.log(ageUser - 5); // 17
console.log(ageUser / 5); // 4.4
console.log(ageUser * 5); // 110

let newAge = (ageUser - 7) * 2;

console.log("Nový věk je: " + newAge); // 30
console.log(outsideTemp - internalTemp); // 30.5

let textNum = "35"; // Bude se chovat jako string
console.log(textNum);

// Modulo % => Vydělý dvě čísla a vrátí nám zbytek po celočíselném dělení
console.log(7 % 3); // Zbyde 1
console.log(8 % 3); // Zbyde 2
console.log(9 % 3); // Zbyde 0
console.log(4 % 6); // Zbyde 4 (4 / 6 = 0 zbyde 4)