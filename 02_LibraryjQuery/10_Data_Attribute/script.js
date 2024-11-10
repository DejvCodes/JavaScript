$("button").on("click", (e) => {
    // console.log($(e.currentTarget));
    let dataAttribute = $(e.currentTarget).data("animal");
    console.log(dataAttribute);

    $(".animals div").removeClass("active");
    $("."+dataAttribute).addClass("active");
});