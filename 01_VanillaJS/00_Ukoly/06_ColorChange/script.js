// Změnte barvu nadpisu h1 podle toho, jakou klávesu uživatel stisknul.

let colors = {
    b: "blue",
    r: "red",
    g: "green",
    p: "pink",
    w: "white",
    v: "purple",
    o: "orange",
}

let titleH1 = document.querySelector("#title");

document.addEventListener("keyup", (e) => {
    titleH1.style.color = colors[e.key];

    if (e.key == "w") {
        titleH1.style.backgroundColor = "black";
    } else {
        titleH1.style.backgroundColor = "white";
    }
});