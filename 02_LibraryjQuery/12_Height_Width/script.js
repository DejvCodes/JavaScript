// height() a width()
// Bez parametrů zjistú aktuální výšku a šířku
console.log($("h1").height()); // 37

// Pokud uvedeme parametr, tak tato funkce nastaví na elementu novou šířku a výšku
$("h1").height(500); // Nastaví na 500 px

// Pokud existuje více elementů se stejným selektorem, tak funkce height() a width()
// vrátí výšku a šířku pouze prvního elementu
console.log($("p").height()); // 74

// Po kliknutí na čtverec dvojnásobně zvětšit rozměry
$(".square").on("click", (e) => {
    let currentHeight = $(e.currentTarget).height();
    let currentWidth = $(e.currentTarget).width();
    // console.log(currentHeight + " a " + currentWidth);

    // Změnit s animací
    $(".square").animate({
        "height": currentHeight * 2,
        "width": currentWidth * 2,
    });

    // Změnit bez animace
    // $(e.currentTarget).height(currentHeight * 2);
    // $(e.currentTarget).width(currentWidth * 2); 
});