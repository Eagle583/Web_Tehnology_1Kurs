const EveryP = document.querySelectorAll('p');
console.log("Всі Параграфи:",EveryP);
const EveryH2 = document.querySelectorAll('h2');
console.log("Всі H2:",EveryH2);
const Bodycolor = window.getComputedStyle(document.body).backgroundColor;
console.log("Колір Бади",Bodycolor);
const h1 = document.getElementById("1");
const FontSizeH1 = window.getComputedStyle(h1).fontSize;
console.log("Розмір h1:",FontSizeH1);