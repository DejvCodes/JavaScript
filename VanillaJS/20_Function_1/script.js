// Funkce procvičování 1
function average(argArrayOfNumbers) {
    if (argArrayOfNumbers.length == 0) {
        return 0;
    } else {
        let result;
        let suma = 0;

        for (let i = 0; i < argArrayOfNumbers.length; i++) {
            suma += argArrayOfNumbers[i];
        }

        result = suma / argArrayOfNumbers.length;
        return result;
    }
}

let array = [9, 6, 4, 4, 6, 1];

console.log(average([5, 7, 3, 9, 1, 2, 1])); // 4
console.log(average(array)); // 5
