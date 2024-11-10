let car1 = {
    brand: "Audi",
    model: "A5",
    type: "coupe",
    fuel: "diesel",
    newCar: false,
    equipment: ["air conditioning", "ABS", "Multifunction"],
    properties: {
        drive: "4x4",
        engine: "3.0",
        horsePower: 220,
    },
};

let car2 = {
    brand: "Audi",
    model: "A6",
    type: "sedan",
    fuel: "petrol",
    newCar: true,
    equipment: ["air conditioning", "ABS", "Multifunction", "EPS"],
    properties: {
        drive: "4x4",
        engine: "2.0",
        horsePower: 170,
    },
};

// console.log(car2.equipment[2]); // Multifunction
// console.log(car2.properties.horsePower); // 170

// Vytvoříme si třídu pro přidávání objektů
class addCar {
    // Zavolá se když budeme chtít vytvořit nový objekt
    constructor (argBrand, argPrice, argModel, argType, argFuel, argNewCar, argEquipment, argInStock) {
        // this => reprezentuje konkrétní objekt
        // .znacka => vlastnost toho objektu
        this.brand = argBrand;
        this.price = argPrice;
        this.model = argModel;
        this.type = argType;
        this.fuel = argFuel;
        this.newCar = argNewCar;
        this.equipment = argEquipment;
        this.inStock = argInStock;
    }

    discountCar(argdiscount) {
        this.price -= argdiscount;
    }

    sellCar(){
        this.inStock--;
    }
}

// Vytvoření nového objektu pomocí třídy
let car3 = new addCar("Audi", 320000, "A4", "Combi", "Diesel", true, ["ABS", "ESP"], 20);
console.log(car3);
car3.discountCar(20000);
console.log(car3)

let car4 = new addCar("Volvo", 450000, "XC60", "SUV", "Diesel", false, ["ABS"], 7);
console.log(car4);
car4.discountCar(50000);
car4.sellCar();
console.log(car4);

console.log(car4.inStock + " ks");