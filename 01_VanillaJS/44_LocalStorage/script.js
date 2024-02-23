console.log(localStorage.getItem("bg-color"));
console.log(localStorage.getItem("title-color"));

let body = document.querySelector("body");
body.style.backgroundColor = localStorage.getItem("bg-color");

let title = document.querySelector("h1");
title.style.color = localStorage.getItem("title-color");

let buttonSubmit = document.querySelector("[name=color-submit]");
// console.log(buttonSubmit);

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let inputBgColor = document.querySelector("#bg-color");
    let inputTitleColor = document.querySelector("#title-color");

    console.log(inputBgColor.value);
    console.log(inputTitleColor.value);

    let body = document.querySelector("body");
    body.style.backgroundColor = inputBgColor.value;
    // localStorage.setItem("klíč", hodnota);
    localStorage.setItem("bg-color", inputBgColor.value);   

    let title = document.querySelector("h1");
    title.style.color = inputTitleColor.value;
    localStorage.setItem("title-color", inputTitleColor.value);
});