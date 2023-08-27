"use strict";
const quoteElement = document.querySelector(".container .quote");
const authorElement = document.querySelector(".container .author");
const API_URL = "https://quote-backend-2jsz.onrender.com/api/v1/quotes";
async function getQuote() {
  const response = await fetch(API_URL);
  const quote = await response.json();
  return quote;
}
getQuote()
  .then((quote) => {
    console.log(quote);
    if (quoteElement != null && authorElement != null) {
      quoteElement.innerHTML = quote.quote;
      authorElement.textContent = quote.author;
    }
  })
  .catch((err) => {
    console.log("Error while fetching data: ", err);
  });
