let button = document.querySelector("button");

button.addEventListener("click", () => {
    let myDiv = document.createElement("div");
    myDiv.classList.add("square");

    let setOfSquares = document.querySelector(".setOfSquares");
    setOfSquares.appendChild(myDiv);
});