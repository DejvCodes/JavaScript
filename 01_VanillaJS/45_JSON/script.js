// let user = {
//     firstName: "David",
//     yearOfDate: 2002,
//     adult: true,
//     hobby: ["fitness", "sport", "programming"],
//     notebook: {
//         brand: "MacBook",
//         yearOfManufacture: 2023,
//     },
// };

// console.log(user);

// // JSON
// let stringInJSONFormat = JSON.stringify(user);
// console.log(stringInJSONFormat);

// localStorage.setItem("user-data", stringInJSONFormat);

// Vytáhneme string ve formátu JSON
let data = localStorage.getItem("user-data");
console.log(data);
console.log(data.length);

// Převedení JSON zpět na objekt
let jsObject = JSON.parse(data);
console.log(jsObject.firstName);  // David
console.log(jsObject.yearOfDate); // 2002