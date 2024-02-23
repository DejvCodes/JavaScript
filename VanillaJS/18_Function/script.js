// Samotná definice funkce nic nespouští
function alertHello(argFirstName) {
    alert("Ahoj " + argFirstName);
}

let userResponse = prompt("Jak Vás máme pozdravit?");

// Volání funkce (call a function)
alertHello(userResponse);   

// Funkce větší číslo
function higherNumber(argFirstNum, argSecondNum) {
    if (argFirstNum >= argSecondNum) {
        console.log(argFirstNum);
    } else {
        console.log(argSecondNum);
    }
}

higherNumber(42, 70); // 70
higherNumber(97, 40); // 97