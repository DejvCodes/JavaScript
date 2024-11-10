// Negace
console.log(!true); // false    
console.log(!(5 + 4 == 9)); // false

// Nerovná se
let animal = "pes";
if (animal != "pes") {
    console.log("Pes to není");
} else {
    console.log("Je to pes.");
}

// ===, !==
// Kontroluje zdali souhlasí i datový typ
if (5 === "5") {
    console.log(true);
} else if (5 === 5) {
    console.log(true);
}

let value = "David";
console.log(true); // true
console.log(false); // false
console.log(true || false); // true
console.log(true && false); // false
console.log(value == "David" || (3 + 5) == 8); // true
console.log(value.length == 5 && (false || true) && (false == false)); // true
console.log((6 + 7) != 13 || (!true) || ("david" == value.toLocaleLowerCase() && value.length <= 10)); // true