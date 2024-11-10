let container = document.querySelector(".card-container");

container.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("front");
});