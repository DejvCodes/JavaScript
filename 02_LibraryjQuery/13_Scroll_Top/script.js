// Chceme zjistit jaká je aktuální pozice uživatele v rámci scrollovaní
// event scroll
$(window).on("scroll", () => {
    console.log($(window).scrollTop());
});

// Máme 3 tlačítka
// 1.tlačítko nás odscrolluje na 1000
// 2.tlačítko nás odscrolluje na 1500
// 3:tlačítko nás odscrolluje na 2000

$("button").on("click", (e) => {
    let dataAttribute = $(e.currentTarget).data("position");
    console.log(dataAttribute); 

    // Scrollování
    $("html,body").animate({
        "scrollTop": dataAttribute,
    }, 1000);
});