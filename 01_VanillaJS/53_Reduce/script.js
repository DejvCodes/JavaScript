const arrayOfNumbers = [51, 78, 41, 22, 4, -21, 17, 96, 82, -30];

const sum = arrayOfNumbers.reduce((accumulator, number) => {
    return accumulator + number
}, 0)
console.log(sum) // 340

const sumOfOddNumbers = arrayOfNumbers.reduce((accumulator, number) => {
    if (number % 2 == 1) {
        return accumulator + number
    } else {
        return accumulator
    }
}, 0)
console.log(sumOfOddNumbers) // 109

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

// Sčítání věku všech osob
const ageOfAllPeople = arrayOfPeople.reduce((accumulator, onePerson) => {
    return accumulator + onePerson.age
}, 0)
console.log(ageOfAllPeople)