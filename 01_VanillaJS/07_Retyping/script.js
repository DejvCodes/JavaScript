console.log("51" + 23); // 5123 (string)
console.log(51 + 23); // 74 (int)

// Častá chyba - z promptu přichází odpověď ve formě stringu
let ageUser = prompt("Kolik je Vám let?"); // Pokud zadá uživatel 22
console.log(ageUser); // 22 (string)
console.log(ageUser + 5); // 225 (string)

// Převedení stringu na integer +()
console.log(+(ageUser) + 5); // 27

console.log("5" + 3 + 7); // JS provádí z leva do prava "5" + 3 = "53" + 7 => "537"
console.log("5" + (3 + 7)); // "5" + 10 => "510"
console.log(5 + 3 + "7"); // 8 + "7" => "87"
console.log(5 + 3 + +("7")); // 8 + 7 => 15 (int)

let numOfPeople = +(prompt("Kolik lidí se přihlásilo")); // Převedeme prompt na int
console.log(numOfPeople); // int
