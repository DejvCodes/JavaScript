// Nechte uživatele zadat libovolné kladné číslo
// Do konzole pak toto číslo odpočítávejte každou sekundu, dokud
// se nedostanete na 0 a pak vypište "Happy new year!".

let numByUser = +(prompt("Zadejte kladné libovolné číslo"));
// console.log(numByUser);

let interval = setInterval(() => {
    console.log(numByUser);

    if (numByUser != 0) {
        numByUser--;
    } else {
        clearInterval(interval);

        setTimeout(() => {
            console.log("Happy new year");
        }, 1000);
    }
}, 1000);