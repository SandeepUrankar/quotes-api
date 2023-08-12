const express = require("express");
const router = express.Router();

const { loadData, getRandomQuote } = require("../utils/quotes");

router.get("/", (req, res) => {
  //   loadData();
  const quote = getRandomQuote();
  res.send(quote);
});

module.exports = router;
