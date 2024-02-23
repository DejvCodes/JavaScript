$("li").css({
    "background-color": "green",
});

$("li")[2].style.background = "gray";

// Výběr konkrétního elementu pomocí selektoru eq
$("li:eq(0)").css({
    "background-color": "red",
    "font-size": "40px",
});

$("li").eq(3).css({
    "color": "coral",
    "font-size": "35px",
});