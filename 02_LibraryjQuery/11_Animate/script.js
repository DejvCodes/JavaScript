// Generování náhodné šířky
let randomWidth = Math.floor(Math.random() * 600);

// Animace
$(".animate").animate({
    "width": randomWidth+"px",
    "background-color": "red",
}, 1500);

// Po kliknutí na zpět na TOP odscrollovat zpět nahoru
$("button").on("click", () => {
    $("html,body").animate({
        "scrollTop": 0,
    }, 2000);
});