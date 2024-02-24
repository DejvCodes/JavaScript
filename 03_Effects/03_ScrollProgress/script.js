document.addEventListener("scroll", () => {
    let pageHeight = document.documentElement.scrollHeight;
    let userPosition = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;

    let percent = Math.round((userPosition / (pageHeight - windowHeight)) * 100);
    console.log(percent);

    document.querySelector(".progress").style.width = percent + "%";
});