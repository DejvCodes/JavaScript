// Vanilla
document.querySelector(".pVanilla").innerHTML = "Hello <strong>World</strong>";
document.querySelector(".pVanilla").innerHTML += "<br><br>";
document.querySelector(".pVanilla").innerHTML += "<button>Tlačítko</button>";

// jQuery
// Pouze text
$(".pjQuery").text("Hello <strong>World</strong>"); // Hello <strong>World</strong>

// Rozumí HTML tagům
$(".pjQuery").html("Hello <strong>World</strong> <br>"); // Hello World

// Přidá na konec
$(".pjQuery").append(" KONEC Hello <strong>World</strong> KONEC <br>");

// Přidá na začátek
$(".pjQuery").prepend(" ZAČÁTEK Hello <strong>World</strong> ZAČÁTEK <br>");

// Vytvoření nového elementu
let subtitle = $("<h2></h2>");
subtitle.css({
    "background-color": "lightblue",
    "fontsize": "37px",
});
subtitle.text("Podnadpis h2");
$(".pjQuery").prepend(subtitle);

let counter = 0;
setInterval(() => {
    $(".pjQuery h2").text(counter);
    counter++;
}, 1000);