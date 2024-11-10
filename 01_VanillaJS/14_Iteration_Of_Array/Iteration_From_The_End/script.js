let array = [13, 11, 16, 14, 17, 24, 26, 25, 19, 15];

for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}
console.log("Konec pole");

// Mazaní prvků od konce
for (let i = array.length - 1; i >= 0; i--) {
    array.splice(i, 1);
}
console.log(array);