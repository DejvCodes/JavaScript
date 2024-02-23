// Vanilla
document.querySelector("h1").addEventListener("click", (e) => {
    e.currentTarget.style.color = "red";
});

// jQuery
$("h1").on("click", (e) => {
    e.currentTarget.style.backgroundColor = "lightblue";
});

// preventDefault v jQuery
$("a").on("click", (e) => {
    e.preventDefault();
    alert("Zabránili jsme přesměrování.");
});

// Obarvení podnadpisu
$("h2").on("mouseover", () => {
    $("h2").css({
        "color": "blue",
        "backgroundColor": "lightblue",
    });
});

$("li").on("click", (e) => {
    // e.currentTarget je vanilla => nelze použít .css()
    // Musíme tento element obalit do jQuery objektu
    $(e.currentTarget).css({
        "color": "red",
        "font-size": "30px",
    });
});

    