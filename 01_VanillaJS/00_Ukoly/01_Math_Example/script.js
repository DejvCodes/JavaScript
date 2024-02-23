// Vytvořte program, který se uživatele zeptá kolik je 8 + 6?
// Pokud uživatele odpoví správně, tak mu pogratulujete. Pokud odpoví špatně, tak
// mu vvypište správnou odpověď

let example = +prompt("Kolik je 8 + 6?");
console.log(example);

// Výsledek
const result = 14;

// Validace
if (example == result) {
    alert("Správná odpověď. Gratulujeme!!!");
} else if (example != result) {
    alert("Špatná odpověď. Správná odpověď je " + result);
}