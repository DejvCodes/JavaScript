// Vytvoření prázdné proměnné
let myFavColor;
console.log(myFavColor) // undefined

// Přidání hodnoty do proměnné
myFavColor = "black";
console.log(`Moje oblíbená barva je: ${myFavColor}`); // black

// Přepsání hodnoty
myFavColor = "blue";
console.log(myFavColor); // blue

// Vytvoření proměnné pro venkovní teplotu
let temperature = 25;
console.log(`Venkovní teplota je: ${temperature}`); // 25

// Proměnná const = nelze ji přepisovat/měnit
const yearOfBirth = 2002;
console.log(`Rok narození je: ${yearOfBirth}`); // 2002

// const nelze přepsat
// yearOfBirth = 2000;
// console.log(`Rok narození je: ${yearOfBirth}`);

// Nelze nadefinovat proměnnou, která už existuje
// let temperature;
// const yearOfBirth;

// !!! Nepoužívat var - můžeme ho lehce přepsat !!!

// ES6 - nová verze JS
// => let a const

let firstName = "Dejv";
let secondName = "Kalmus";
let myEmail = "dejvios@seznam.cz";

console.log(`My firstname is ${firstName}`);
console.log("------------------------");
console.log(`My secondname is ${secondName}`);
console.log(`My email is ${myEmail}`);

document.getElementById("p1").textContent = `My name is ${firstName}`;
document.getElementById("p2").textContent = secondName;
document.getElementById("p3").textContent = myEmail;