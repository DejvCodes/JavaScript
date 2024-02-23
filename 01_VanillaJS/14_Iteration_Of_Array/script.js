let colors = ["Red", "Blue", "White", "Yellow", "Red", "Brown", "Green", "Purple", "Pink", "Grey"];

console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log("---------");

let index = 0;
let numOfElements = colors.length;
while(index < numOfElements) {
    console.log(colors[index]);
    index++;
}
console.log("While končí");
console.log("---------");

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
console.log("For končí");
console.log("---------");