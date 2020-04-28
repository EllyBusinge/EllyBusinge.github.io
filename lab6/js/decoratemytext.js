"use strict;"
/**
 * Author Elly - Businge
 */

/**
 * Sets font size
 */
function setTxtFont(){
    let textAreaBox = document.getElementById("txt1");

    let currentFont = getCurrentFontSize();
    if (currentFont < 60) {
        textAreaBox.style.fontSize = getCurrentFontSize() + 2 + "pt";
    }
}

/**
 * Implements a timer that increases the font every 500ms
 */
function increaseTxtFont() {
    let timer = setInterval(setTxtFont, 500);
}

/**
 * Displays bling decoration when bling button is clicked
 */
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

/**
 * Returns current font size of the text
 */
function getCurrentFontSize() {
    let fontSize = window.getComputedStyle(document
        .getElementById("txt1"), null)
        .getPropertyValue('font-size');
    return parseInt(fontSize);
}

/**
 * Converts text to Pig Latin
 */
function convertToPigLatin() {
    let allLines = document.getElementById("txt1").value.trim().split("\n");
    let newText = "";
    let newLine;
    let vowels = "aeiouAEIOU";
    for (let line of allLines) {
        let words = line.trim().split(" ");
        for (let i in words) {
            if (!words[i].localeCompare(" ") && vowels.indexOf(words[i].charAt(0))>-1) {
                words[i] = (words[i].substring(1) + words[i].charAt(0) + "ay");
            }
            else {
                words[i] += "ay";
            }
        }
        newLine = words.join(" ") + "\n";
        newText += newLine;
    }
    document.getElementById("txt1").value = newText;
}

/**
 * Converts text to Malkovitch
 */
function convertToMalkovitch() {
    let allLines = document.getElementById("txt1").value.trim().split("\n");
    let newText = "";
    let newLine;
    for (let line of allLines) {
        let words = line.split(" ");
        newLine = "";
        for (let i in words) {
            if (words[i].length >= 5) {
                words[i] = "Malkovich";
            }
        }
        newLine = words.join(" ") + "\n";
        newText += newLine;
    }
    document.getElementById("txt1").value = newText;
}

window.onload = function() {
    let biggerDeco = document.getElementById("biggerDeco");
    //biggerDeco.onclick = setTxtFont;
    biggerDeco.onclick = increaseTxtFont;

    let checkbox = document.getElementById("chkbx");
    checkbox.onclick = displayBling;

    let pigLatin = document.getElementById("pigLatin");
    pigLatin.onclick = convertToPigLatin;

    let malkovitch = document.getElementById("malkovitch");
    malkovitch.onclick = convertToMalkovitch;
}