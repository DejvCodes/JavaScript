// Vanilla 
// classList.add()
// classList.remove()

// jQuery

// 1. Metoda
$(".circle").on("click", (e) => {
    $(e.currentTarget).toggleClass("active");
});

// 2. Metoda
$(".circle").on("click", (e) => {
    if ($(e.currentTarget).hasClass("active")) {
        $(e.currentTarget).removeClass("active");
    } else {
        $(e.currentTarget).addClass("active");
    }
});

// 3. Metoda
let boolean = true;
$(".circle").on("click", (e) => {
    if (boolean == true) {
        $(e.currentTarget).addClass("active");
        boolean = false;
    } else {
        $(e.currentTarget).removeClass("active");
        boolean = true;
    }
});


