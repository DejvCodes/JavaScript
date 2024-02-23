// Zachycení tlačítka
let button = document.querySelector("[name=submit]");
// console.log(button);

// Zachytíme input po kliknutí na tlačítko
button.addEventListener("click", (e) => {
    e.preventDefault();

    // Uložíme si zvolenou barvu do proměnné
    let color = document.querySelector("[name=chooseColor]");
    console.log(color.value);

    // Vytvoříme kolečko => Vytvoříme si div a pak přidáme classu s názvem
    let newCircle = document.createElement("div");
    newCircle.classList.add("circle");

    // Uložíme si do proměnné div, do kterého budeme přidávat kolečko
    let circles = document.querySelector(".circles");
    circles.appendChild(newCircle);

    // Novému kolečku přidáme barvu zadanou od uživatele
    newCircle.style.backgroundColor = color.value;
});