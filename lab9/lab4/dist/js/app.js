"use strict;"

$(document).ready(function(){
    $("#login").on("click", processLoginForm);
    $("#addProduct").on("click", processProductForm);
});

/**
 * Prints form values to the console
 * @param {*} event 
 */
function processLoginForm(event) {
    console.log("Email Address - " + $("#emailAddress").val());
    console.log("URL - " + $("#url").val());
    console.log("Password - " + $("#password").val());
    event.preventDefault();
}

/**
 * Appends a DIV to the container
 * @param {*} event 
 */
function processProductForm(event) {
    const newDiv = $("<div>", {
        "css" : {
            "margin-top" : "60px"
        }
    });

    newDiv.prepend($("<p>", {
        "id" : "productNo",
        "text" : `ProductNumber - ${$("#productNumber").val()}`
    }));

    newDiv.prepend($("<p>", {
        "id" : "productName",
        "text" : `ProductName - ${$("#productName").val()}`
    }));

    newDiv.prepend($("<p>", {
        "id" : "quantity",
        "text" : `Quantity - ${$("#quantity").val()}`
    }));

    newDiv.prepend($("<p>", {
        "id" : "supplier",
        "text" : `Supplier - ${$("#supplier").val()}`
    }));

    newDiv.prepend($("<p>", {
        "id" : "unitPrice",
        "text" : `Unit Price - ${$("#unitPrice").val()}`
    }));

    newDiv.prepend($("<p>", {
        "id" : "supplyDate",
        "text" : `Supply Date - ${$("#supplyDate").val()}`
    }));

    $("#container").append(newDiv);
    event.preventDefault();
}