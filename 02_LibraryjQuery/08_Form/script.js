// Validace při odeslání formuláře
$("[name=hash-color-submit]").on("click", (e) => {
    // Zastavíme refresh stránky
    e.preventDefault();

    // Pokud chceme zjistit hodnotu inputu, tak použijeme funkci .val()
    let hash = $("[name=hash-color]").val();
    // console.log(hash);

    if (hash.length == 7) {
        $(".result").text("Hash je správný");
    } else {
        $(".result").text("Délka textu není správná");
    }
});

// Validace po každém stisknutí klávesy
$("[name=hash-color]").on("keyup", (e) => {
    // Pokud chceme zjistit hodnotu inputu, tak použijeme funkci .val()
    let hash = $("[name=hash-color]").val();
    console.log(hash);

    if (hash.length == 7) {
        $(".result").text("Hash je správný");
    } else {
        $(".result").text("Délka textu není správná");
    }
});