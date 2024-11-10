const arrayOfNumbers = [51, 78, 41, 22, 4, -21, 17, 96, 82, -30];

// Pokud vrátí záporné číslo, tak vezme číslo A a dá ho před číslo B
// Pokud vrátí kladné číslo, tak vezme číslo B a dá ho před číslo A
// Pokud vrátí číslo 0, tak se nic nestane
const newArrayOfNumbers = arrayOfNumbers.sort((numA, numB) => {
    return numA - numB
})
console.log(newArrayOfNumbers) // od nejnižšího k největšímu

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
// console.log(arrayOfPeople)

// Seřazení podle věku
const newArrayOfPeople = arrayOfPeople.sort((personA, personB) => {
    if (personA.age < personB.age) {
        return 1
    } else if (personA.age > personB.age) {
        return -1
    } else {
        return 0
    }
})
console.log(newArrayOfPeople)