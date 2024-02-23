let day = "Pondělí";
let temperature = Math.floor(Math.random() * 40);

let someString = "Dneska je " + day + " a je " + temperature + " stupňů.";
console.log(someString);

// back-tick ``
let templateString = `Dneska je ${day} a je ${temperature} stupňů.`;
console.log(templateString);

let templateString2 = `Dneska je ${day} a je ${Math.floor(Math.random() * 40)} stupňů`;
console.log(templateString2);