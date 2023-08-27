"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const quoteElement = document.querySelector(".container .quote");
const authorElement = document.querySelector(".container .author");
const API_URL = "https://quote-backend-2jsz.onrender.com/api/v1/quotes";
function getQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(API_URL);
        const quote = yield response.json();
        return quote;
    });
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
