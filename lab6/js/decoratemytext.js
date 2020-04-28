
function displayAlert(){
    let textAreaBox = document.getElementById("txt1");
    textAreaBox.className = "biggerDeco";
}

function displayBling(){
    let checkbox = document.getElementById("chkbx");
    let textAreaBox = document.getElementById("txt1");

    if (checkbox.checked) {
        textAreaBox.style.fontWeight = "bold";
        textAreaBox.style.color = "green";
        textAreaBox.style.textDecoration = "underline";
    } else {
        textAreaBox.style.fontWeight = "normal";
        textAreaBox.style.color = "black";
        textAreaBox.style.textDecoration = "none";
    }
}

window.onload = function() {
    "use strict;"

    let button = document.getElementById("biggerDeco");
    button.onclick = displayAlert;

    let checkbox = document.getElementById("chkbx");
    checkbox.onclick = displayBling;
}