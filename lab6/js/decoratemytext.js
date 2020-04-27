
function displayAlert(){
    var textAreaBox = document.getElementById("txt1");
    textAreaBox.className = "biggerDeco";
}

window.onload = function() {
    var button = document.getElementById("biggerDeco");
    button.onclick = displayAlert;
}