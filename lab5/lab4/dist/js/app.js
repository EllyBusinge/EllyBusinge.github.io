/**
 * Author Elly Businge
 */

 /**
  * Prints to the console
  */
function printToConsole() {
    const emailAddress = document.getElementById("emailAddress");
    const url = document.getElementById("url");
    const password = document.getElementById("password");
    console.log("Email Address - " + emailAddress.value);
    console.log("URL - " + url.value);
    console.log("Password - " + password.value);
}

/**
 * Displays a Popup
 */
function showPopUp() {
    const productNumber = document.getElementById("productNumber");
    const quantity = document.getElementById("quantity");
    const productName = document.getElementById("productName");
    const supplier = document.getElementById("supplier");
    const unitPrice = document.getElementById("unitPrice");
    const supplyDate = document.getElementById("supplyDate");

    alert("ProductNumber -" + productNumber.value + "\nQuantity - " + quantity.value 
    + "\nProductName - " + productName.value
    + "\nSupplier - " + supplier.value
    + "\nUnitPrice - " + unitPrice.value
    + "\nSupplyDate - " + supplyDate.value);
}