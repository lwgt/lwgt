let timerIsOn = false
let petIsAngryy = false
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
    if (petIsAngryy == false) {
    setTimeout(() => {
    petHasHunger()
    }, randomNumber(300000, 150000));
    }
}
function petHasHunger() {
    document.getElementById("feelings").innerHTML = "Dein Pet Hat Hunger. <br> Gebe ihm Futter!"
}
function petIsAngry() {
    document.getElementById("feelings").innerHTML = "Dein Pet ist wütend! Gebe ihm sofort Futter, oder Streichle es!"
    petIsAngryy = true
}
function stroke() {
    petHasHunger()
}
function moreResources(foodOfPetEN, foodOfPetDE) {
    console.log("More Resources")
    document.getElementById("feelings").innerHTML = "Du brauchst mehr " + foodOfPetDE
    updateResources()
    if (timerIsOn === false && petIsAngryy === false) {
        timerIsOn = true
        setTimeout(()=> {
        timerIsOn = false
        petHasHunger()
        }, 5000)
    }
    // if (timerIsOn === false) {
        timerIsOn = true
        setTimeout(()=> {
        timerIsOn = false
        petIsAngry()
        }, 20000)

    }
// }

function feed() {
        if (localStorage.getItem("pet1") === "Katze") {
            if (!(localStorage.getItem("mice")== "0")) {
                petIsHappy(); let mice = parseInt(localStorage.getItem("mice"));
                localStorage.setItem("mice", mice - 1)
            } else {
                moreResources("mice","Mäuse")
            }
        } else {
            if (localStorage.getItem("pet1") === "Hase") {
                if (!(localStorage.getItem("carrots")== "0")) {
                    petIsHappy(); 
                    let carrots = parseInt(localStorage.getItem("carrots"));
                    localStorage.setItem("carrots", carrots - 1)
                } else {
                    moreResources("carrots","Karotten")
                }
            } else {
                if (localStorage.getItem("pet1") === "Welpe") {
                    if (!(localStorage.getItem("meat")== "0")) {
                        petIsHappy(); 
                        let meat = parseInt(localStorage.getItem("meat"));
                        localStorage.setItem("meat", meat - 1)
                    } else {
                        moreResources("meat","Fleisch")
                    }
                } else {
                    if (localStorage.getItem("pet1") === "Meerschweinchen") {
                        console.log("Tier ist Meerschweinchen"); 
                        if (!(localStorage.getItem("nuts")== "0")) {
                            console.log(localStorage.getItem(nuts)); 
                            console.log("Du hast genug Nüsse"); 
                            petIsHappy(); 
                            let nuts = parseInt(localStorage.getItem("nuts"));
                            localStorage.setItem("nuts", nuts - 1)
                        } else {
                            console.log("Zu wenig Resources"); 
                            moreResources("nuts","Nüsse")
                        }
                    }
                }
            }
        }
}

petIsHappy()
// Seite wurde geladen
console.log("Timer Startet")

// Timer starten
    if (petIsAngryy == false && timerIsOn === false) {
    timerIsOn = false
    setTimeout(() => {
    timerIsOn = false
    petHasHunger()
    }, randomNumber(300000, 150000));
    }