// Originální pole zůstane nedotčené
// Filter nám vrátí nové pole
// Pokud arrow funkce vrátí true, tak hodnotu vrátí do finálního pole
// Pokud arrow funkce vrátí false, tak hodnotu vynechá

const arrayOfNumbers = [51, 78, 41, 22, 4, -21, 17, 96, 82, -30];

// Filtrování sudých čísel
const newArrayOfNumbers = arrayOfNumbers.filter((oneNum) => {
    return oneNum % 2 === 0
});
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

const newArrayOfPeople = arrayOfPeople.filter((onePerson) => {
    return onePerson.firstName !== "Lukas"
});
console.log(newArrayOfPeople)

const arrayOfAdultPeople = arrayOfPeople.filter((oneAdult) => {
    return oneAdult.isAdult === true
});
console.log(arrayOfAdultPeople)