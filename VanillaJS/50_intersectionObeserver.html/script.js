// Vytvoříme instanci observera
let instanceObservera = new IntersectionObserver((argArrayOfAllSections) => {
    for (let sections of argArrayOfAllSections) {
        // Vlastnost isIntersection říká jestli element na stránce je nebo není
        // Tato vlastnost vrací boolean (true/false)
        if (sections.isIntersecting) {
            // .target nám vrací element, na kterém pak můžeme používat style, classList, add
            sections.target.classList.add("active");
        } else {
            sections.target.classList.remove("active");
        }
    }
} , {
    threshold: 0.3,
});

// Zaměříme všechny tagy "section"
let arraySection = document.querySelectorAll("section");
for (let section of arraySection) {
    // Zde říkáme, že instance má hlídat stav této sekce
    instanceObservera.observe(section);
}