// Vytvořte libovolný objekt nějakého zvířátka a vypište tento objekt do konzole
// (vymyslete alespoň 6 vlastností a použjte alespoň 3 různé datové typy)

let wolf = {
    fullName: "Vlk",
    kindOfAnimal: "Psovitá šelma",
    evolution: "Vlk šedý se objevuje v období staršího pleistocénu.",
    howManyYearsAgo: 810000,
    isDangerous: true,
    otherAnimalSpecies: ["Vlk polární", "Vlk mongolský", "Vlk indický"],
    characteristics: {
        weight: "16-80 kg",
        bodyLength: "100-17% cm",
        height: "66-81 cm",
    }
};

// Přejmenování celého názvu
wolf.fullName = "Vlk obecný";
console.log(wolf.fullName);

// Vlk obecný je psovitá šelma
console.log(wolf.fullName + " je " + wolf.kindOfAnimal);

// Evoluce vlka: Vlk šedý se objevuje v období staršího pleistocénu 
console.log(wolf.evolution);

// Vlk obecný se objevuje před 810000 lety
console.log(wolf.fullName + " se objevuje před " + wolf.howManyYearsAgo + " lety.");

// Je vlk obecný nebezpečný? - true
console.log("Je " + wolf.fullName + " nebezpečný? - " + wolf.isDangerous);
console.log("------------------------------");

// Vypsání všech druhů
console.log("Všechny druhy jsou: ");
for (let i = 0; i < wolf.otherAnimalSpecies.length; i++) {
    console.log((i+1) + ". " + wolf.otherAnimalSpecies[i]);
}

// Vlk obecný váží: 16-80 kg
console.log(wolf.fullName + " váží: " + wolf.characteristics.weight);