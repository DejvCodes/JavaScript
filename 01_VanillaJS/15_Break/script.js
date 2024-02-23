let cars = ["mini", "audi", "bmw", "toyota", "ford", "volvo", "škoda"];
let userResponse = prompt("U jaké značky to máme breaknout").toLocaleLowerCase();

for (let i = 0; i < cars.length; i++) {
    if (cars[i] == userResponse) {
        break; // Zbytek cyklu se už nevykoná
    }
    console.log(cars[i]);
}
console.log("Hotovo");
console.log("----------");

while (true) {
    let userResponse2 = prompt("Jste ženatý?(Ano/Ne)").toLocaleLowerCase();
    if (userResponse2 != "ano" && userResponse2 != "ne") {
        alert("Zadali jste špatnou odpověď.");
    } else {
        break;
    }
}
console.log("Hotovo");