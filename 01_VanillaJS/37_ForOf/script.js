let arrayOfColors = ["red", "blue", "green", "yellow"];

// Klasický for cyklus
for (let i = 0; i < arrayOfColors.length; i++) {
    console.log(arrayOfColors[i]);
}
console.log("-------------");

// ForEach metoda
arrayOfColors.forEach((color) => {
    console.log(color);
});
console.log("-------------");

// ForOf metoda
for (let color of arrayOfColors) {
    console.log(color);
    if (color == "green") {
        break;
    }
}