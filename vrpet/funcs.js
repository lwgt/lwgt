function play() {
    window.location.href='play.html'
}
function farm() {
    window.location.href='farm.html'
}
function updateResources() {
    document.getElementById("carrots").innerHTML = localStorage.getItem("carrots")
    document.getElementById("meats").innerHTML = localStorage.getItem("meats")
    document.getElementById("nuts").innerHTML = localStorage.getItem("nuts")
    document.getElementById("mice").innerHTML = localStorage.getItem("mice")
}