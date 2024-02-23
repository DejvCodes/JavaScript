let colors = ["Blue", "Red", "Yellow", "Green"];
console.log(colors);

// push => Přidá prvek do pole
colors.push("Pink");
console.log(colors);

// pop => Odstraní poslední položku z pole
let lastItemRemoved = colors.pop();
console.log("Odstraněno: " + lastItemRemoved);
console.log(colors);

// unshift => Vloží prvek na začátek pole
colors.unshift("Brown");
console.log(colors);

// shift => Odstraní prvek, který je na začátku pole
colors.shift();
console.log(colors);

// splice => Odstraní prvek, který určíme
colors.splice(2, 1);
console.log(colors);

// https://www.w3schools.com/js/js_array_methods.asp