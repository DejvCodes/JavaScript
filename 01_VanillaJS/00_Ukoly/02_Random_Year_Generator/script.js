// Vytvořte program, který vygeneruje a vypíše do konzole náhodný letopočet mezi
// 1992 až 2050. Promptem nechte uživatele zvolit, kolik náhodných letopočtů se má
// vypsat do konzole

// Například: Uživatel zadá do promptu číslo 6. V konzoli najdeme
// například tato čísla: 2033, 1999, 1992, 2050, 2008, 2041

let minYear = 1992;
let maxYear = 2050;

// Volba uživatele
let yearByUser = +prompt("Zadejte počet náhodných letopočtů: ");

for (let i = 0; i < yearByUser; i++) {
    // Generování náhodného letopočtu od 1992 - 2050
    let randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;

    console.log(randomYear);
} 