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

first().then((argSplneno) => {
    console.log(argSplneno)
    return second()
}).then((argSplneno) => {
    console.log(argSplneno)
    return third()
}).then((argSplneno) => {
    console.log(argSplneno)
}).catch((argNesplneno) => {
    console.log(argNesplneno)
})