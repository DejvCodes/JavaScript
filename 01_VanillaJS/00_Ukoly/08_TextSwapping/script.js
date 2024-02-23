let button = document.querySelector("button");

let firstP = document.querySelector(".firstP");
let secondP = document.querySelector(".secondP");

button.addEventListener("click", () => {
    let firstContent = firstP.innerText;
    firstP.innerText = secondP.innerText;
    secondP.innerText = firstContent;
});