let button = document.querySelectorAll("button");

button.forEach((elmButton) => {
    elmButton.addEventListener("click", (e) => {
        let hash = e.currentTarget.dataset.bgColor;
        let elmBody = document.querySelector("body");
        elmBody.style.backgroundColor = hash;
    });
});