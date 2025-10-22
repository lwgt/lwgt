if (localStorage.getItem("pet1") === null) {
    localStorage.setItem("alreadyPlayed", null)
    window.location.href='selectpet.html'
}
if (localStorage.getItem("alreadyPlayed") === null) {
    window.location.href='selectpet.html'
}
function petIsHappy() {
    document.getElementById("feelings").innerHTML += "Dein Pet ist Glücklich!"
}
function petHasHunger() {
    document.getElementById("feelings").innerHTML += "Dein Pet Hat Hunger. <br> Gebe ihm Futter!"
}
function play() {
    window.location.href='play.html'
}
petIsHappy()