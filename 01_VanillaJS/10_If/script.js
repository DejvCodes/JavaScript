let ageUser = +prompt("Kolik Vám je let?");
console.log(ageUser);

// Výsledkem je boolean => true/false
if (ageUser >= 18) {
    console.log("Jste dospělý člověk. Můžete si koupit alkohol.");
} else if (ageUser >= 15) {
    console.log("Jste mladiství. Můžete si koupit energy drink.");
} else {
    console.log("Nejste plnoletý. Nemůžu Vám nabídnout alkohol.");
}

let isManYesOrNo = prompt("Jste muž?").toLocaleLowerCase();
console.log(isManYesOrNo);

// Vnořený if
// if (ageUser >= 18) {
//     if (isManYesOrNo == "ano") { // Case sensitive - rozlišují se velká a malá písmena
//         alert("Vítejte v klubu.");
//     } else if (isManYesOrNo == "ne") {
//         alert("Nemůžete vstoupit");
//     } else {
//         alert("Zadali jste nevalidní odpověď");
//     }
// } else {
//     alert("Nebylo Vám 18 let. Nemůžete vstoupit do klubu.");
// }

// && => Logický operátor AND
// Pokud obě podmínky vrátí true, pak bude výsledek podmínky true true
if (ageUser >= 18 && isManYesOrNo == "ano") {
    alert("Můžete vstoupit do klubu.");
} else {
    alert("Nebylo Vám 18 let nebo nejste muž. Nemůžete vstoupit do klubu.");
}
// || (pipeliny) => Logický operátor OR
// Stačí, aby byla true alespoň jedna podmínka (můžou být i obě true)

let membership = "gold";

if (membership == "gold" || membership == "silver") {
    alert("Můžete využit naše výhody.");
} else {
    alert("Tato akce je pouze pro zlaté a stříbrné členy.");
}