// Vytvoření pole barev
let colors = []; // Toto je prázné pole
console.log(colors);

// Vytvoření pole notebooky
let notebooks = ["Asus", "MSI", "Acer", "Dell"];
console.log(notebooks); // ['Asus', 'MSI', 'Acer', 'Dell']

// Výpis prvku z pole
console.log("Můj notebook je od značky: " + notebooks[0]); // Asus

// Vytvoření pole čísel
let numbers = [31, 56, 33, 43, 22];
// Součet 2. a 5. čísla
console.log(numbers[1] + numbers[4]); // 56 + 22 = 78

let myNotebook = notebooks[0];
console.log(myNotebook); // Asus

// Přidání nového prvku do pole
console.log(notebooks); // ['Asus', 'MSI', 'Acer', 'Dell']
notebooks.push("Lenovo"); 
console.log(notebooks); // ['Asus', 'MSI', 'Acer', 'Dell', 'Lenovo']

// Změna prvku v poli
notebooks[2] = "MacBook";
console.log(notebooks); // ['Asus', 'MSI', 'MacBook', 'Dell', 'Lenovo']

// Odstranění prvku z pole
// notebooks.splice(index, počet prvků pro smazání);
notebooks.splice(3, 2) // Začít od prvku s indexem 3 a vymazat 2 prvky
console.log(notebooks); // ['Asus', 'MSI', 'MacBook']

// Vkládání prvku na specifické místo
// notebooks.splice(začít od prvku s indexem 1, smazat 0 prvků, přidat prvek "Dell"); 
notebooks.splice(1, 0, "Dell");
console.log(notebooks); // ['Asus', 'Dell', 'MSI', 'MacBook']

// Odstranění posdledního prvku v poli
let deleteNotebook = notebooks.pop(); // Automaticky odstraní poslední prvek
console.log(notebooks); // ['Asus', 'Dell', 'MSI']

// Odstranění prvního prvku v poli
let firstDeletedNotebook = notebooks.shift(); // Automaticky odstraní první prvek v poli
console.log(notebooks); // ['Dell', 'MSI']
console.log(firstDeletedNotebook); // Asus

// Práce s polem v poli
let arrayOfMixValues = ["David", "Kalmus", 50, ["MSI", "iPhone", "Dell", "MacBook"], "Auto", 30];
console.log(arrayOfMixValues); // ['David', 'Kalmus', 50, Array(3), 'Auto', 30]
console.log(arrayOfMixValues[3]); // ['MSI', 'Dell', 'MacBook']

console.log("Mobil v poli je: " + arrayOfMixValues[3][1]); // Mobil v poli je: iPhone
console.log("Notebook v poli je: " + arrayOfMixValues[3][3]); // Notebook v poli je: MacBook

// Změna prvku v poli s dalším polem
arrayOfMixValues[3][1] = "Samsung";
console.log("Mobil v poli je: " + arrayOfMixValues[3][1]); // Mobil v poli je: Samsung

// Length - délka pole
let fruit = ["Banana", "Orange", "Pineapple", "Strawberry", "Orange"];
console.log(fruit.length); // 5

// indexOf() - Kolikátý je prvek v poli
let shopList = ["Croissant", "Croissant", "Orange", "Fish", "Oil", "Donut", "Orange"];
console.log(shopList.indexOf("Pasta")); // -1 znamená, že hledaný prvek není v poli
console.log(shopList.indexOf("Fish")); // 3
console.log(shopList.indexOf("Orange")); // 2 - první výskyt prvku v poli (když funkce najde, tak dál nehledá)

// Druhý parametr bude index od kterého chceme hledat
console.log(shopList.indexOf("Orange", 3)); // 6