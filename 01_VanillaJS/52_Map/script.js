const arrayOfNumbers = [51, 78, 41, 22, 4, -21, 17, 96, 82, -30];

// Umocníme všechna čísla v poli
// Sudé vrátíme, liché nahradíme stringem
const newArrayOfNumbers = arrayOfNumbers.map((oneNumber) => {
    const value = Math.pow(oneNumber, 2)
    return value % 2 === 0 ? value : "liché číslo"
})
console.log(newArrayOfNumbers)

const arrayOfPeople = [
    {
        id: 1,
        firstName: "Jan",
        lastName: "Novak",
        age: 25,
        isAdult: true
    },
    {
        id: 2,
        firstName: "Petra",
        lastName: "Svobodova",
        age: 17,
        isAdult: false
    },
    {
        id: 3,
        firstName: "Lukas",
        lastName: "Dvorak",
        age: 34,
        isAdult: true
    },
    {
        id: 4,
        firstName: "Eva",
        lastName: "Horakova",
        age: 15,
        isAdult: false
    }
];
console.log(arrayOfPeople)

// Pokud ve funkci map měníme vlastnosti objektu, tak se změní i hodnota originálu
const newArrayOfPeople = arrayOfPeople.map((onePerson) => {
    onePerson.age += 10
    return onePerson
})
console.log(newArrayOfPeople)


// // Původní pole zůstane v originálu
// const newArrayOfPeople = arrayOfPeople.map(onePerson => ({
//     ...onePerson, // Vytvoříme nový objekt pomocí spread operátoru
//     age: onePerson.age + 10 // Změníme pouze věk v tomto novém objektu
// }));
// console.log(newArrayOfPeople)