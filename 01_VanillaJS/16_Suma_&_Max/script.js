let array = [65, 41, 40, 87, 11, -56, 33, 72, 96, 60, -14, -3, -20, 100];
let suma = 0;

for (let i = 0; i < array.length; i++) {
    // suma = suma + array[i];
    suma += array[i];
}
console.log(suma);

// Zjistíme maximum (největší číslo)
// Do proměnné max uložíme první číslo v poli
let max = array[0];

for (let i = 0; i < array.length; i++) {
    // console.log(max + " < " + array[i]);
    if (max < array[i]) {
        max = array[i];
    } else {
        // Iterované číslo je menší než naše max
    }
}
console.log(max);