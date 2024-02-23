// .getElementById
let secondSubtitle = document.getElementById("secondSubtitle");
console.log(secondSubtitle);

secondSubtitle.style.backgroundColor = "blue";

// .getElementsByTagName
let elementH2 = document.getElementsByTagName("h2");
console.log(elementH2); // HTMLCollection(2) [h2, h2#secondSubtitle, secondSubtitle: h2#secondSubtitle]


// elementH2.style.fontFamily = "courier" // Nefunguje, protože pole nemá vlastnost style
elementH2[0].style.fontFamily = "courier";
elementH2[1].style.fontFamily = "courier";

// Pokud máme kolekci elementů a chceme změnit vlastnost u všech, tak můžeme použít cyklus
for (let i = 0; i < elementH2.length; i++) {
    elementH2[i].style.color = "red";
}

// .getElementsByClassName
let classNameP2 = document.getElementsByClassName("p2");
console.log(classNameP2);
for (let i = 0; i < classNameP2.length; i++) {
    classNameP2[i].style.fontSize = "20px";
}

// querySelectorAll => Tato funkce vždy vrací pole elementů
let p1 = document.querySelectorAll(".p1");
console.log(p1); // NodeList(2) [p.p1.p2, p.p1]

for (let i = 0; i < p1.length; i++) {
    p1[i].style.backgroundColor = "yellow";
}

// document.querySelectorAll(".p1 .p2"); // S mezerou znamená, že chceme element p2 uvnitř elementu p1

// Chceme element co má class p1 i p2
let p1p2 = document.querySelectorAll(".p1.p2");
console.log(p1p2);

for (let i = 0; i < p1p2.length; i++) {
    p1p2[i].style.backgroundColor = "green";
}

// Dodatečné info
// .querySelector vypíše první element (vypíše jeden)
let p2 = document.querySelector(".p2");
console.log(p2);

p2.style.fontSize = "30px";