
function displayAlert(){
    alert("Hello, world!");
}

window.onload = function() {
    var button = document.getElementById("biggerDeco");
    button.onclick = displayAlert;
}