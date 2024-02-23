function changeColor() {
    // Generování náhodné barvy

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let body = document.querySelector("body");
    // console.log("rgb(" + red + "," + green + "," + blue + ")");
    body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

let button = document.querySelector("#button-color");
// console.log(button);

button.addEventListener("click", (e) => {
    changeColor();
});