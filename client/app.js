"use strict";
const quoteElement = document.querySelector(".container .quote");
const authorElement = document.querySelector(".container .author");
const getQuoteButton = document.querySelector(".container .quote__btn");
const API_URL = "https://quote-backend-2jsz.onrender.com/api/v1/quotes";
async function getQuote() {
    const response = await fetch(API_URL);
    const quote = await response.json();
    return quote;
}
async function display() {
    try {
        const quote = await getQuote();
        if (quoteElement != null && authorElement != null) {
            quoteElement.innerHTML = quote.quote;
            authorElement.textContent = quote.author;
        }
        console.log(quote);
    }
    catch (error) {
        console.error("Error while fetching data : ", error);
    }
}
getQuoteButton?.addEventListener("click", () => {
    display();
});
