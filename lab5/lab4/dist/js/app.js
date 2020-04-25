
function printToConsole() {
    const emailAddress = document.getElementById("emailAddress");
    const url = document.getElementById("url");
    const password = document.getElementById("password");
    console.log("Email Address - " + emailAddress.value);
    console.log("URL - " + url.value);
    console.log("Password - " + password.value);
}

function showPopUp() {
    const productNumber = document.getElementById("productNumber");
    const quantity = document.getElementById("quantity");
    const productName = document.getElementById("productName");

    alert("ProductNumber -" + productNumber.value + "\nQuantity - " + quantity.value 
    + "\nProductName - " + productName.value);
}