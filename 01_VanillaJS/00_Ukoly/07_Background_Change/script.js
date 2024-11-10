// Vytvořte stránku, ve které budou 2 tlačítka
// Prvním tlačítkem zahájíte změnu pozadí stránky, barva stránky e bude generovat náhodně,
// změna bude plynulá a bude se automaticky měnit každé 3 sekundy.
// Druhým tlačítkem na stránce barvu zastavíte a pozadí stránky už se nebude měnit.

// Vytvoření funkce pro změnu barvy
function colorChange() {
    // Generování náhodné barvy
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(r + ", " + g + ", " + b);

    let body = document.querySelector("body");
    body.style.backgroundColor = "rgb("+ r + ", " + g + ", " + b + ")";
}
colorChange();

// Zaznamenání tlačítek do proměnné
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

// Vytvoříme si proměnnou pro interval
let interval;

// Připojíme posluchač pro button1
button1.addEventListener("click", () => {
    interval = setInterval(() => {
        colorChange();
    }, 3000);
});

// Připojíme posluchač pro button2, aby jsme zastavili interval
button2.addEventListener("click", () => {
    clearInterval(interval);
    console.log("Interval zastaven");
});