function shop() {
    window.location.href='shop.html'
}
function play() {
    window.location.href='play.html'
}
function farm() {
    window.location.href='farm.html'
}
function updateResources() {
    document.getElementById("carrots").innerHTML = localStorage.getItem("carrots") + "🥕"
    document.getElementById("meats").innerHTML = localStorage.getItem("meats") + "🥩"
    document.getElementById("nuts").innerHTML = localStorage.getItem("nuts") + "🥜"
    document.getElementById("mice").innerHTML = localStorage.getItem("mice") + "🐭"
    document.getElementById("money").innerHTML = localStorage.getItem("money") + "💶"
}
function buy(article) {
    let howMany = parseInt(localStorage.getItem(article))
    console.log(howMany)
    if (parseInt(localStorage.getItem("money"))> 0) {
        localStorage.setItem(article, howMany + 1)
        localStorage.setItem("money", parseInt(localStorage.getItem("money")) - 5)
    }
}
function zurücksetzen() {
    window.location.href='zurücksetzen.html'
}