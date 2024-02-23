let buttonSubmit = document.querySelector("[name=color-submit]");
// console.log(buttonSubmit);

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let inputBgColor = document.querySelector("#bg-color");
    let inputTitleColor = document.querySelector("#title-color");

    let body = document.querySelector("body");
    body.style.background = inputBgColor.value;

    let title = document.querySelector("h1");
    title.style.color = inputTitleColor.value;

    let form = document.querySelector("#form-change-color");
    setTimeout(() => {
        form.submit();
    }, 5000);
});