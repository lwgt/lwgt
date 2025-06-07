// let frage1 = ["Was ist die Hauptstadt von Deutschland?", "Berlin"];
// let frage2 = ["Was ist die Hauptstadt von Schweiz", "Bern"];
// let frage3 = ["Was ist die Hauptstadt von Frankreich?", "Paris"];
// let frage4 = ["Was ist die Hauptstadt von Italien?", "Rom"];
// let frage5 = ["Was ist die Hauptstadt von Großbritannien?", "London"];



// let Punkte = 0;
// alert("Mein JavaScript Game");
// document.getElementsByClassName("Fragen")[0].innerHTML = frage1[0];
// if (frage1[1] === prompt("Was ist die Hauptstadt von Deutschland?")) {
//     Punkte += 1;

// }
// document.getElementsByClassName("Fragen")[0].innerHTML = frage2[0];
// if (frage2[1] === prompt()) {
//     Punkte += 1;
// }
// document.getElementsByClassName("Fragen")[0].innerHTML = frage3[0];
// if (frage3[1] === prompt()) {
//     Punkte += 1;
// }
// document.getElementsByClassName("Fragen")[0].innerHTML = frage4[0];
// if (frage4[1] === prompt()) {
//     Punkte += 1;
// }
// document.getElementsByClassName("Fragen")[0].innerHTML = frage5[0];
// if (frage5[1] === prompt()) {
//     Punkte += 1;
// }
// alert("Du hast " + Punkte +" von 5 Fragen richtig beantwortet.");


// JavaScript Quiz Game
// -----Fragen-----
let fragen = [
    ["Was ist die Hauptstadt von Deutschland?", "Berlin"],
    ["Was ist die Hauptstadt von Frankreich?", "Paris"],
    ["Was ist die Hauptstadt von Italien?", "Rom"],
    ["Was ist die Hauptstadt von Großbritannien?", "London"],
    ["Was ist die Hauptstadt von der Schweiz?", "Bern"]
];
let index = 0;
document.getElementById("Fragen").innerHTML = fragen[index][0];
let Input = document.getElementById("Input");
function checkAnswer() {
    if (Input.value === fragen[index][1]) {
        alert("Richtig!");
        if (index === 5) {
            window.location.href = "Spielende.html";
        }
        index++;
        document.getElementById("Fragen").innerHTML = fragen[index][0];
        Input = document.getElementById("Input");
    }
}