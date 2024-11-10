// setTimeout() a setInterval() nejsou blokovací

// setTimeout() => počká nějaký čas a poté vykoná kod uvnitř funkce
setTimeout(() => {
    console.log("Uběhlo 6 sekund.");
}, 6000);

// setInterval() => Vykoná kod uvnitř funkce každou sekundu - (zadaný interval)
// Pokud chceme zastavit interval, tak ho musíme uložit do proměnné
let interval = setInterval(() => {
    console.log("Utekla 1 sekunda");
}, 1000);

setTimeout(() => {
    clearInterval(interval); // Zastavíme setInterval
    console.log("Interval zastaven.");
}, 12000);

// Jak nastavit delší čas
setTimeout(() => {
    
}, 1000 * 60 * 5.5); // 5,5 minut