let circle = document.querySelector(".circle");
let isCircle = true;

circle.addEventListener("click", (e) => {
    // console.log("kliknuto");
    if (isCircle == true) {
        e.currentTarget.style.backgroundColor = "aquamarine";
        e.currentTarget.style.width = "130px";
        e.currentTarget.style.height = "130px";
        e.currentTarget.style.borderRadius = "0%";

        isCircle = false;
    } else {
        e.currentTarget.style.backgroundColor = "coral";
        e.currentTarget.style.width = "100px";
        e.currentTarget.style.height = "100px";
        e.currentTarget.style.borderRadius = "50%";

        isCircle = true;
    }
});