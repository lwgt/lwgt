if (localStorage.getItem("pet1") === null) {
    localStorage.setItem("alreadyPlayed", null)
    window.location.href='selectpet.html'
}
if (localStorage.getItem("alreadyPlayed") === null) {
    window.location.href='selectpet.html'
}
function randomNumber(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum / 60 / 1000)
  return randomNum / 60
}
// function updateResources() {
//     document.getElementById("carrots").innerHTML = localStorage.getItem("carrots")
//     document.getElementById("meats").innerHTML = localStorage.getItem("meats")
//     document.getElementById("nuts").innerHTML = localStorage.getItem("nuts")
//     document.getElementById("mice").innerHTML = localStorage.getItem("mice")
// }
function petIsHappy() {
    document.getElementById("feelings").innerHTML = "Dein Pet ist Glücklich!"
}
function petHasHunger() {
    document.getElementById("feelings").innerHTML = "Dein Pet Hat Hunger. <br> Gebe ihm Futter!"
}
function moreResources(foodOfPetEN, foodOfPetDE) {
    console.log("ahhhaaaa")
    document.getElementById("feelings").innerHTML = "Du brauchst"
}

function feed() {
        if (localStorage.getItem("pet1") === "Katze") {if (!(localStorage.getItem("mice")== "0")) {petIsHappy(); let mice = parseInt(localStorage.getItem("mice"));localStorage.setItem("mice", mice - 1)} else {moreResources("Mäuse")}}
        else {
            if (localStorage.getItem("pet1") === "Hase") {if (!(localStorage.getItem("carrots")== "0")) {petIsHappy(); let carrots = parseInt(localStorage.getItem("carrots"));localStorage.setItem("carrots", carrots - 1)} else {moreResources("Karotten")}}
            else {
                if (localStorage.getItem("pet1") === "Welpe") {if (!(localStorage.getItem("meat")== "0")) {petIsHappy(); let meat = parseInt(localStorage.getItem("meat"));localStorage.setItem("meat", meat - 1)}else {moreResources("Fleisch")}}
                else {
                    if (localStorage.getItem("pet1") === "Meerschweinchen") {console.log("ok"); if (!(localStorage.getItem("nuts")== "0")) {console.log("waaaassss?????"); petIsHappy(); let nuts = parseInt(localStorage.getItem("nuts"));localStorage.setItem("nuts", nuts - 1)}else {console.log("ok bis hier ghehts"); moreResources("Nüsse")}}
                }
            }
        }
}

petIsHappy()
// Seite wurde geladen
console.log("Timer Startet")

// Timer starten
setTimeout(() => {
    petHasHunger()
}, randomNumber(300000, 150000));
