let origoText = "Dneska je v Praze hezké počasí";

// .toLowerCase();
let allSmall = origoText.toLowerCase();
console.log(allSmall);

// .toUpperCase();
console.log(origoText.toUpperCase());

origoText = "   Dneska je v Praze hezké počasí    ";

// .trim(); => Smaže mezery (pouze před a za)
console.log(origoText.trim());

// https://www.w3schools.com/js/js_string_methods.asp

// .substring(kde začit, kde skončit);
console.log(origoText.substring(3, 9)); // Dneska
console.log(origoText.substring(13, 20)); // v Praze

// .replace();
console.log(origoText.replace("hezké", "ošklivé")); // Dneska je v Praze ošklivé počasí