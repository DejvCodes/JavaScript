// Selectování
let h1 = document.querySelectorAll("h1")[0]; // Vrací pole => chceme 1. element

// Připojit posluchač, specifikovat událost a arrow funkci
h1.addEventListener("click", () => {
    h1.style.background = "red";
});

let paragraph = document.querySelectorAll("p");
for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].addEventListener("mouseover", (e) => {
        // paragraph[i].style.backgroundColor = "green"; // Toto nelze použít
        // currentTarget je element, na kterém je posluchač a spustila se událost
        e.currentTarget.style.color = "green";
    });
}