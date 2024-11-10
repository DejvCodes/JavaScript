let panel = document.querySelectorAll(".panel");

// .contains => vrací zdali tam je nebo ne

for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", (e) => {
        // if (!e.currentTarget.classList.contains("circle")) {
        //     e.currentTarget.classList.add("circle");
        //     console.log(e.currentTarget.classList.contains("circle"));
        // } else {
        //     e.currentTarget.classList.remove("circle");
        //     console.log(e.currentTarget.classList.contains("circle"));
        // }

        // Toggle => zkontroluje zda je class přítomna, pokud není, tak ji přidá a pokud je, tak
        // ji odebere
        e.currentTarget.classList.toggle("circle");
    });
}