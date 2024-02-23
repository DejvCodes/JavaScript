let score = 0;

score = 123;
console.log(score); // 123

score = score + 60;
console.log(score) // 183

score = score - 33;
console.log(score); // 150

// Navýší aktuální hodnotu o 1 nahoru
score++;
console.log(score); // 151

// Sníží aktuální hodnotu o 1 dolů
score--;
console.log(score) // 150
score--;
score--;
score--;
score--;
score--;
console.log(score) // 145

// Navýší aktuální hodnotu o 7 nahoru
score += 7;
console.log(score); // 152

// Sníží aktuální hodnotu o 7 dolů
score -= 7;
console.log(score); // 145

// Aktuální hodnotu vynásobíme
score *= 2;
console.log(score); // 290

// Aktuální hodnotu vydělíme 
score /= 2;
console.log(score); // 145

// Lepení textu
let fullName = "David";
fullName += " Kalmus";
console.log(fullName); // David Kalmus