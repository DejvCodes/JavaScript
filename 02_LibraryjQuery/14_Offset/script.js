$("li").on("click", (e) => {
    let dataAttribute = $(e.currentTarget).data("section");
    // console.log(dataAttribute);

    let offSetTop = $("."+dataAttribute).offset().top;
    let offSetLeft = $("."+dataAttribute).offset().left;
    console.log(offSetTop);
    console.log(offSetLeft);

    $("html,body").animate({
        "scrollTop": offSetTop,
    }, 2000);
});