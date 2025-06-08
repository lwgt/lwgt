function addContact() {
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let numberInput = document.getElementById("numberInput");
    document.getElementById("contactList").innerHTML += "<p style='display: flex; gap: 15px;'>" + nameInput.value + "</p>";
    document.getElementById("contactList").innerHTML += "<p style='display: flex; gap: 15px;'>" + emailInput.value + "</p>";
    document.getElementById("contactList").innerHTML += "<p style='display: flex; gap: 15px;'>" + numberInput.value + "</p>";
}