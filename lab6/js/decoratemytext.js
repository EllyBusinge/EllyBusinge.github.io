"use strict;"

function setTxtFont(){
    let textAreaBox = document.getElementById("txt1");
    //textAreaBox.className = "biggerDeco";
    textAreaBox.style.fontSize = getCurrentFontSize() + 2 + "pt";
}

function displayBling(){
    let checkbox = document.getElementById("chkbx");
    let textAreaBox = document.getElementById("txt1");

    if (checkbox.checked) {
        textAreaBox.style.fontWeight = "bold";
        textAreaBox.style.color = "green";
        textAreaBox.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url(images/hundred-dollar-bill.jpg)";
    } else {
        textAreaBox.style.fontWeight = "normal";
        textAreaBox.style.color = "black";
        textAreaBox.style.textDecoration = "none";
        document.body.style.backgroundImage = "";
    }
}

function getCurrentFontSize() {
    let fontSize = window.getComputedStyle(document
        .getElementById("txt1"), null)
        .getPropertyValue('font-size');
    return parseInt(fontSize);
}

window.onload = function() {
    let button = document.getElementById("biggerDeco");
    button.onclick = setTxtFont;

    let checkbox = document.getElementById("chkbx");
    checkbox.onclick = displayBling;
}