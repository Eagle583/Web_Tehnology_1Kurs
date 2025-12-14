const EveryP = document.querySelectorAll('p');
console.log("Всі Параграфи:",EveryP);
const EveryH2 = document.querySelectorAll('h2');
console.log("Всі H2:",EveryH2);
const Bodycolor = window.getComputedStyle(document.body).backgroundColor;
console.log("Колір Бади",Bodycolor);
const h1 = document.getElementById("1");
const FontSizeH1 = window.getComputedStyle(h1).fontSize;
console.log("Розмір h1:",FontSizeH1);

const section = document.getElementById("section1")
section.addEventListener("mouseenter",function(){
    section.style.backgroundColor = 'red';
    console.log("proverka")
});
section.addEventListener("mouseleave",function(){
    section.style.backgroundColor = 'rgb(24, 21, 18)';
});

function ImagesArrayF(){
    let imagesArrey = ["Images/Cat1.jpg","Images/Cat2.jpg","Images/Cat3.jpg"]
    const IMGZone = document.getElementById("ArrayIMG")
    const Fragment = document.createDocumentFragment();
    imagesArrey.forEach(function(itemUrl){
        const IMGelement= document.createElement('img');
        IMGelement.src = itemUrl;
        Fragment.appendChild(IMGelement);
    })
    IMGZone.appendChild(Fragment)
}

setTimeout(ImagesArrayF,5000)