let user = {
    firstName: "David",
    secondName: "Kalmus",
    yearOfBirth: 2002,
    hobby: ["Cars", "Swimming", "Programming", "Fitness"],
    workLaptop: {
        RAM: 16,
        Guarantee: false,
        Display: "Oled",
        Equipment: ["čtečka otisků prstů", "webkamera", "usb-c"],
    }
};

// Vypsání celého objektu
console.log(user);

// Vypsání křestního jména a roku narození
console.log(user["firstName"]); // David
console.log(user.yearOfBirth); // 2002

// Objekt > pole
console.log(user.hobby); // ['Cars', 'Swimming', 'Programming', 'Fitness']
console.log(user.hobby[2]) // Programming

// Vypsání čtečky otisku
// Objekt > objekt > pole
console.log(user.workLaptop.Equipment[0]); // čtečka otisku

// Přejmenování křestního jména
console.log(user.firstName); // David
// Změna hodnoty pomocí tečkového zápisu
user.firstName = "Jirka";
console.log(user.firstName); // Jirka

// Změna hodnoty webkamera na HDMI
console.log(user.workLaptop.Equipment[1]); // webkamera
user.workLaptop.Equipment[1] = "HDMI";
console.log(user.workLaptop.Equipment[1]); // HDMI

// Přidání vlastnosti / klíče
user.employment = "Elektromechanik"; // Pokud JS zjistí, že tam klíč není, tak ho vytvoří
console.log(user.employment); // Elektromechanik