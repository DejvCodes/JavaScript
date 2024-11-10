// Vanilla
let title = document.querySelector("h1");
title.style.backgroundColor = "orange";
title.style.fontSize = "40px";

let arrayP = document.querySelectorAll("p");
arrayP.forEach((elmP) => {
    elmP.style.color = "darkblue";
});
console.log(document.querySelectorAll("p"));

// jQuery .css()
$("p").css({
    "background-color": "salmon",
    "font-family": "courier",
    "font-size": "15px",
});

console.log($("p"));
// Uvnitř objektu jq jsou čisté elementy a můžeme použít vanillu
$("p")[1].style.fontSize = "30px";

// Uvnitř objektu jq už nelze použít funkci .css()
$("p").css({
    "padding": "20px",
    "color": "brown",
});