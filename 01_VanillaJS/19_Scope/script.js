// Scope proměnné
let age = 29;

if (5 == 2 + 3) {
    console.log("True"); // True
    console.log(age); // 29

    let temperature = 35; // Může se používat pouze uvnitř tohoto bloku
    console.log(temperature); // 35

    if (true) {
        console.log(temperature); // 35

        let day = "Pondělí";
        console.log(day); // Pondělí
    }
    // console.log(day); // day is not defined
}

// Vyhodí chybu, protože proměnná teplota existuje pouze uvnitř bloku
// console.log(temperature); // temperature is not defined
let temperature = 20;
console.log(temperature); // 20
console.log("-------");

while (true) {
    let color = "Červená";
    console.log(color);
    break;
}
// console.log(color); // color is not defined

for (let i = 0; i < 1; i++) {
    // Zde proměnná i existuje
    console.log(i); // 0
}
// Zde proměnná i neexistuje
// console.log(i); // i is not defined
console.log("-----------");

// Scope funguje také u funkcí
function negative(argNumber) {
    let result = 0 - argNumber; // Proměnné, které vzniknou uvnitř funkce nelze použít mimo ně
    return result;
    // Pokud chceme nějakou hodnotu dostat ven z funkce, tak ji musíme returnovat
}

console.log(negative(6)); // -6
console.log(negative(1)); // -1