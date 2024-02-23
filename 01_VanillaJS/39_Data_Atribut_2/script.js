let button = document.querySelectorAll("button");

button.forEach((elmButton) => {
    elmButton.addEventListener("click", (e) => {
        let color = e.currentTarget.dataset.filter;
        // console.log(color);

        let allPanels = document.querySelectorAll(".panel");
        allPanels.forEach((panel) => {
            panel.classList.remove("active");
        });

        let panels = document.querySelectorAll("."+color);
        panels.forEach((panel) => {
            panel.classList.add("active");
        });
    });
});