let plusCookies = 1
let Points = 0
let cookieText = "🍪Cookies🍪" + Points

function Click() {
    Points += plusCookies;
    console.log(Points)
    cookieText = "🍪Cookies🍪" + Points
    document.getElementById("currentCookies").innerHTML = cookieText;
}