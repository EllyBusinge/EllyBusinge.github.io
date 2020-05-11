/**
 * app.js
 * @author Elly Businge
 */

 "use strict";

 $(document).ready(function() {
    fetchAllBooks();

    function fetchAllBooks() {
        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
        .then((response) => {
            if(response.ok) {    
            return response.json();
            } else {
            return Promise.reject({ status: response.status, statusText: response.statusText });
            }
        })
        .then(books => {
            let content = "";
            if(books.length > 0) {
                books.forEach(function(book, i) {
                content += `
                        <tr>
                            <th scope="row">${i+1}.</th>
                            <td>${book.isbn}</td>
                            <td>${book.title}</td>
                            <td>${book.overdueFee}</td>
                            <td>${book.publisher}</td>
                            <td>${book.datePublished}</td>
                        </tr>
                    `;
                }); 
            } else {
                content += `
                        <tr>
                            <td style="text-align: center;" colspan="9">No books data found</td>
                        </tr>
                        `;
            };
            document.querySelector("#tbodyBooksList").innerHTML = content;
        })
        .catch(err => {
            const tbodyErrMsg = `<tr>
                                    <td style="text-align: center;" colspan="9"><p style='color:#ff0000;'>We are sorry. The eTDM books data service is unavailable. Please try again later.</p></td>
                                </tr>`;
            document.getElementById("tbodyBooksList").innerHTML = tbodyErrMsg;
            console.log("Error message:", err);            
        });
    }

    function setup4SavingNewBook() {
        const txtTitle = document.querySelector("#title");
        const txtIsbn = document.querySelector("#isbn");
        const txtDop = document.querySelector("#dop");
        const txtPublisher = document.querySelector("#publisher");
        const txtFees = document.querySelector("#fees");

        bookRegistrationForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const title = txtTitle.value;
            const isbn = txtIsbn.value;
            const dop = txtDop.value;
            const publisher = txtPublisher.value;
            const fees = parseInt(txtFees.value);

            const newBookData = {
                "title": title,
                "isbn": isbn,
                "datePublished": dop,
                "publisher": publisher,
                "overdueFee": fees
            };
            console.log(JSON.stringify(newBookData));  

            fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
                method: "post",
                body: JSON.stringify(newBookData),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function(response) {
                return {"status": "ok"}; 
            }).then(function (jsonResponseData) {
                console.log(jsonResponseData); 
                $("#message").text("Book added successfully");
                setInterval(closeModal, 7000);  
               
                fetchAllBooks();

                txtTitle.value = "";     
                txtIsbn.value = "";   
                txtDop.value = "";
                txtPublisher.value = "";
                txtFees.value = "0.00";
            }).catch(function(error) {
                console.error(error);
            })
        });
    }
    setup4SavingNewBook();

    function closeModal() {
        $("#message").text("");
        $('#newBook').modal('hide'); 
    }
 });