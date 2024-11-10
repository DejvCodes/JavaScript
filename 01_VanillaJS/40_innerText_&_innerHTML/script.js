let firstParagraph = document.querySelector(".firstParagraph");
// console.log(firstParagraph.innerText);
firstParagraph.innerText = "Toto je <strong>nový</strong> string v prvním paragrafu.";

let secondParagraph = document.querySelector(".secondParagraph");
secondParagraph.innerHTML = "Toto je <strong>nový</strong> string ve druhém paragrafu.";

let counter = 0;
setInterval(() => {
    firstParagraph.innerText = counter + "s";
    counter++;
}, 1000);

// Pomocí innerHTML můžeme přidávat nové elementy
let button = document.querySelector("button");
let addCircle = document.querySelector(".addCircle");

button.addEventListener("click", () => {
    addCircle.innerHTML += "<div class='circle'></div>";
});