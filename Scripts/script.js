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


function checkLogin(login){
    const loginMogno=/^[a-zA-Z0-9_]{4,16}$/;
    if (login.match(loginMogno)){
        console.log("Логін можно використовувати")
        return true
    }
    else{
        console.log("Логін не можна використовувати")
        return false
    }
}

const login1 = "Abvg32_"
const login2 = "Кириллица"
const login3 = "Abv"

console.log("Перевірка логіну",checkLogin(login3))

function checkEmail(email){
    const emailMogno = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.match(emailMogno)){
               console.log("Електронну скриньку можно використовувати")
        return true
    }
    else{
        console.log("Електронну скриньку не можна використовувати")
        return false
    }
}

const email1 ="Sobaka@gmail.com"
const email2 ="Собака@джмаіл.ком"
const email3 ="SobGmailCom"

console.log("Перевірка електронної скриньки:",checkEmail(email1))

function checkPhone(phone){
    const PhoneMogno = /^0\d{8}$/;
        if (phone.search(PhoneMogno)==0){
               console.log("Телефон можно використовувати")
        return true
    }
    else{
        console.log("Телефон не можна використовувати")
        return false
    }
}

const phone1 = "098832221"
const phone2 = "333212414"
const phone3 = "03124141"

console.log("Перевірка номеру телефона:",checkPhone(phone1))

function ClearLogin(login) {
    const loginBezProbelov = /\s/g;
    const loginNeMogna = /[^a-zA-Z0-9_]/g;
    let Clearlogin = login.replace(loginBezProbelov,"")
    Clearlogin=login.replace(loginNeMogna,""); 
    return Clearlogin;
}

const Clearlogin1 = "Ім'яUser_!$%@#$   "; 
console.log(ClearLogin(Clearlogin1))


const imput1 = document.getElementById("Input1")
const imput2 = document.getElementById("Input2")
function SpilniSlova(){
const imputBezProbelov1 = imput1.value.trim().toLowerCase();
const imputBezProbelov2 = imput2.value.trim().toLowerCase();
const imputBeZnakov1 = imputBezProbelov1.replace(/[!.,?]/g,"")
const imputBeZnakov2 = imputBezProbelov2.replace(/[!.,?]/g,"")  
const masivSlov1 = imputBeZnakov1.split(" ") 
const masivSlov2 = imputBeZnakov2.split(" ")
const set_slov = new Set(masivSlov1)
const spilniSlova = []
masivSlov2.forEach(function proverkaSlov(slovo){
    if(set_slov.has(slovo)){
        spilniSlova.push(slovo)
    }
})
const UbiraemPovtori = Array.from(new Set(spilniSlova))
const ResultatSpilnihSliv = UbiraemPovtori.join(", ")
document.getElementById("resultat").innerHTML=ResultatSpilnihSliv
}


const Api_URL ="https://http.cat/404"
async function ApiURL(){
    const Imagecat = document.getElementById("CatImage")
    try{
        await new Promise((resolve, reject) =>{
            Imagecat.src =Api_URL
            Imagecat.onload=resolve
            Imagecat.onerror=reject
        })
    
    Imagecat.style.display="block"
}catch(error){
    Imagecat.src=""
    Imagecat.style.display="none"
    console.log("Помилка загрузки.")
}
}

