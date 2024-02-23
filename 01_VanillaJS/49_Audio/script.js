// Vytvoříme instanci nějakého audio souboru
let bgMusic = new Audio("../audio/80x27s-islandy-loop-925bpm-132431.mp3");

// Zaměříme tlačítko play
let buttonPlay = document.querySelector(".play");

// Po kliknutí chceme audio stopu přehrát
buttonPlay.addEventListener("click", () => {
    bgMusic.loop = true;
    bgMusic.play(bgMusic);
});

// Po kliknutí chceme audio stopu zastavit
let buttonPause = document.querySelector(".pause");

buttonPause.addEventListener("click", () => {
    bgMusic.pause(bgMusic);
});