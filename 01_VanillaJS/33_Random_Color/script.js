// Generování náhodné barvy
// RGB => red-green-blue - rgb() 0-255

// setInterval(() => {
//     location.reload();
// }, 1000);

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let body = document.querySelector("body");
console.log("rgb(" + red + "," + green + "," + blue + ")");
body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

// hash #5FD5A1
// 0-9, A-F

let characterSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hash = "#";

for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * characterSet.length);
    hash += characterSet[index];
}

console.log(hash);
let titleH1 = document.querySelector("h1");
titleH1.style.color = hash;