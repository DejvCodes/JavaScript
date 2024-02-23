// document.addEventListener("keyup", (e) => {
//     // Pokud napíšu í
//     console.log(e.key); // í => pokud nás zajíma co píše
//     console.log(e.code); // Digit9 => pokud nás zajímá co stiskl
// });

// Keyup => pokud uživatel stiskne, tak se zaznamená znak jen jednou (záznam, když jde klávesa nahoru)
document.querySelector("#input").addEventListener("keyup", (e) => {
    console.log(e.key);
    console.log(e.code);
});

// Keydown => pokud uživatel drží klávesu, tak se neustále vypisuje znak
document.querySelector("#input").addEventListener("keydown", (e) => {
    console.log(e.key);
    console.log(e.code);
});