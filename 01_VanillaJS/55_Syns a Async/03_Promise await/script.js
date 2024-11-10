function first () {
    return new Promise((argSplneno, argNesplneno) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                argNesplneno("První - Nesplněno");
                return;
            } else {
                console.log("První");
                argSplneno("První - Splněno");
                return;
            }
        }, 1000 * Math.random() * 3)
    })
}

function second () {
    return new Promise((argSplneno, argNesplneno) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                argNesplneno("Druhý - Nesplněno");
                return;
            } else {
                console.log("Druhý");
                argSplneno("Druhý - Splněno");
                return;
            }
        }, 1000 * Math.random() * 3)
    })
}

function third () {
    return new Promise((argSplneno, argNesplneno) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                argNesplneno("Třetí - Nesplněno");
                return;
            } else {
                console.log("Třetí");
                argSplneno("Třetí - Splněno");
                return;
            }
        }, 1000 * Math.random() * 3)
    })
}

// Async / await
async function callAll () {
    try {
        const splnenoFirts = await first();
        console.log(splnenoFirts)
    
        const splnenoSecond = await second();
        console.log(splnenoSecond)
    
        const splnenoThird = await third();
        console.log(splnenoThird)
    } catch(error) {
        console.log(error)
    }
}
callAll()

// await = Zabrání pokračování kodu dokud nebudou dostupná zpracovaná data. 