if (localStorage.getItem("pet1") === null) {
    localStorage.setItem("alreadyPlayed", null)
    window.location.href='selectpet.html'
}
if (localStorage.getItem("alreadyPlayed") === null) {
    window.location.href='selectpet.html'
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function petIsHappy() {
    document.getElementById("feelings").innerHTML += "Dein Pet ist Glücklich!"
}
function petHasHunger() {
    document.getElementById("feelings").innerHTML += "Dein Pet Hat Hunger. <br> Gebe ihm Futter!"
}
petIsHappy()
// Seite wurde geladen
console.log("Timer Startet")

// Timer starten
setTimeout(() => {
    petHasHunger()
}, randomNumber(300000));