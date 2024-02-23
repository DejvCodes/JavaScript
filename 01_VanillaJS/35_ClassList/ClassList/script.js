let panels = document.querySelectorAll(".panel");

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", (e) => {
        for (let x = 0; x < panels.length; x++) {
            panels[x].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    });
}