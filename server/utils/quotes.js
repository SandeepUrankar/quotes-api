const fs = require("fs");
const path = require("path");

let quotes = null;

function loadData() {
  if (quotes) {
    return;
  }
  const FILE_PATH = path.join(__dirname, "../data/quotes.json");
  try {
    const file = fs.readFileSync(FILE_PATH, "utf-8");
    quotes = JSON.parse(file);
  } catch (err) {
    console.log(err.message);
  }
}

function getRandomQuote() {
  loadData();
  const LENGTH = quotes.length;
  const index = Math.floor(Math.random() * LENGTH);
  return quotes[index];
}

// loadData();
// console.log(getRandomQuote());
module.exports = { loadData, getRandomQuote };
