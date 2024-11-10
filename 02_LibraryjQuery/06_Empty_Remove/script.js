// .empty je funkce, která vyprázdní element
$(".list").empty();

// Stejného efektu (jako u .empty) můžeme docílit pomocí .html() a .text();
$(".list").html("");

// .remove() odstraní element ze stránky
$(".list").remove();

// .remove() může přijímat i paramentr, který nám lépe specifikuje elementy k odstranění
$(".list li").remove(".remove")

// Alternativa je specifikovat elementy rovnou v selektoru
$(".list li.remove").remove();