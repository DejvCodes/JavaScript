// Funkce procvičování 2

// 1. Zákazník musí nakoupit alespoň za 500 Kč, aby se aplikovala sleva
//    jinak se cena nezmění

// 2. Maximální výše slevy nesmí překročit 1 000 Kč, pokud sleva bude vyšší
//    než 1 000 Kč, tak se odečte poze 1 000 Kč.

function finalPrice(argTotalPrice, argPercentageDiscount) {
    // Nákup pod 500 Kč => Nebude se aplokovat sleva
    if (argTotalPrice <= 500) {
        let result = "Cena nákupu je: " + argTotalPrice + " Kč.";
        return result;
    }

    // Nákup nad 500 Kč => Bude se aplikovat sleva
    let discount = Math.round((argPercentageDiscount / 100) * argTotalPrice);

    // Pokud by sleva byla vyšší než 1 000 Kč
    if (discount > 1000) {
        discount = 1000;
    }

    // Výpočet finální cena
    let finalPrice = Math.round(argTotalPrice - discount);

    let result = "Cena nákupu je: " + finalPrice + " Kč. Sleva byla: " + discount + " Kč.";
    return result;
}

console.log(finalPrice(600, 10));