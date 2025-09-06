let Points = 0
function Click() {
    Points++;
    console.log(Points)
    document.getElementById("currentCookies").innerHTML = Points;
}