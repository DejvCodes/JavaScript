// Sync funkce => čeká dokud se nedokončí predchozí funkce. Program dál nepokračuje.
// Většina funkcí v JS je sync (jsou blokující)
console.log("A")
console.log("B")
console.log("C")


// Async funkce => se spustí a program pokračuje dál (nečeká na dokončení funkce).
// Spustí ihned další funkci v pořadí (funkce je neblokující)
// Jedná se o časovací funkce. např. pracují se sítí (třeba API)
setTimeout(() => { // Spustí setTimenout a jede dál, nečeká na dokončení
    console.log("první")
}, 1000 * Math.random() * 3)

setTimeout(() => {
    console.log("druhý")
}, 1000 * Math.random() * 3)

setTimeout(() => {
    console.log("třetí")
}, 1000 * Math.random() * 3)


// Jak spustit async funkce za sebou jako sync?
function first (callback) {
    setTimeout(() => {
        console.log("první")
        callback()
    }, 3000 + 1000 * Math.random() * 3)
}

function second (callback) {
    setTimeout(() => {
        console.log("druhý")
        callback()
    }, 1000 * Math.random() * 3)
}

function third (callback) {
    setTimeout(() => {
        console.log("třetí")
        callback()
    }, 1000 * Math.random() * 3)
}

// Pyramida zkázy | callback hell
first(() => {
    second(() => {
        third(() => {})
    })
})

// Místo callback hell se používá Promises .then | async / await