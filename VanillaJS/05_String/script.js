// String
let someText = "Tento string je obalený uvozovkami";
let someText2 = 'Tento string je obalený apostrofy';

let mcDonald = "McDonald's"; // Zde lze použít pouze uvozovky
alert(mcDonald);

// Escapování - zpětné lomítko \
let text = "Tony je \"odborník\" na McDonald's.";
console.log(text);

// Uživatel zadá jméno a příjmení a vypíšeme jeho jméno a příjmení do konzole jako jeden text
let firstName = prompt("Zadejte Vaše jméno:");
let secondName = prompt("Zadejte Vaše příjmení:");
console.log(firstName + " " + secondName);
console.log(`Jméno: ${firstName}, Příjmení: ${secondName}`);

// Prázdný string (nemá žádný znak)
let emptyString = "";

// Délka stringu
console.log(someText.length); // 34
console.log("39"); // 39
console.log("39".length); // 2
console.log(emptyString.length) // 0