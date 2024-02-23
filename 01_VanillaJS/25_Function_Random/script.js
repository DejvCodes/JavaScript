console.log(Math.random()); // Čísla mezi 0 a 1
console.log(Math.random() * 15); // Čísla mezi 0 a 15
console.log(Math.floor(Math.random() * 15)); // Čísla mezi 0 a 14 (zaokrouhlíme dolů)
console.log("----------");

// Hod kostkou (čísla 0 a 6)
console.log(Math.ceil(Math.random() * 6));
console.log(Math.floor(Math.random() * 6) + 1);
console.log("----------");

// Vyber náhodné položky z pole
let array = ["iPhone", "Samsung", "Nokia", "Huawei", "LG"];

let index = Math.floor(Math.random() * array.length);
console.log(array[index]);