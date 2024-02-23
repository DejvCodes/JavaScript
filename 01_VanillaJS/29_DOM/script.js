console.log(document);
document.title = "Můj nový titulek";

// Napiš do title jak dlouho je uživatel na naší stránce
let counter = 1

setInterval(() => {
    document.title = counter + " s";
    counter++;
}, 1000);