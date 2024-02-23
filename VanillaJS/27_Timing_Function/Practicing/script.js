// Do konzole vypište jednou tik a jednou tak

// let counter = 0;
// setInterval(() => {
//     if (counter % 2 == 0) {
//         console.log("tik");
//     } else {
//         console.log("ťak");
//     }
//     counter++;
// }, 1000);

// Pokud chceme vypisovat dvě věci
let booleanFlag = true;
setInterval(() => {
    if (booleanFlag == true) {
        console.log("tik");
        booleanFlag = false;
    } else {
        console.log("ťak");
        booleanFlag = true;
    }
}, 1000);

// Vypisování třech
let counter = 0;
setInterval(() => {
    if (counter % 3 == 0) {
        console.log("tik");
    } else if (counter % 3 == 1) {
        console.log("ťak");
    } else {
        console.log("ťok");
    }
    counter++;
}, 1000);