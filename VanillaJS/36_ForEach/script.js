let elmsLi = document.querySelectorAll("li");

elmsLi.forEach((actualLiElement, indexActualLiElement) => {
    // actualLiElement.style.fontSize = "35px";
    actualLiElement.addEventListener("click", (e) => {
        e.currentTarget.style.fontSize = "35px";
    });

    console.log(indexActualLiElement);
    // break; // Syntatická chyba => forEach nezle breaknout
});