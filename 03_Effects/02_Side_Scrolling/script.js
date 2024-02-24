let years = document.querySelectorAll(".year");

years.forEach((year) => {
    year.addEventListener("click", (e) => {
        // console.log(e.currentTarget);

        let targetPosition = e.currentTarget.offsetLeft;
        // console.log(targetPosition);

        let windowWidth = window.innerWidth;
        // console.log(windowWidth);

        let elementWidth = e.currentTarget.offsetWidth;
        // console.log(elementWidth);

        let timeline = document.querySelector(".timeline");
        timeline.scrollLeft = targetPosition - (windowWidth / 2) + (elementWidth / 2);

        // Barva elementu
        // Nejprv musíme odstranit všechny classy active ze všech elementů
        years.forEach((year) => {
            year.classList.remove("active");
        });

        // Přidáme classu active jednomu elementu
        e.currentTarget.classList.add("active");
    });
});