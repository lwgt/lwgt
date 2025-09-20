let plusCookies = 1
let Points = 0
let cookieText = "🍪Cookies🍪" + Points

function Click() {
    document.getElementById("Error").innerHTML = "";
    Points += plusCookies;
    console.log(Points)
    cookieText = "🍪Cookies🍪" + Points
    document.getElementById("currentCookies").innerHTML = cookieText;
}


function buy(Article) {
    if (Article == "1") {
        if (Points > 100) {
            plusCookies += 1;
            Points -= 100;
        }
        else {
            document.getElementById("Error").innerHTML = "Du hast nicht genügend Cookies";
        }
    }
    
    
}