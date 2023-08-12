require("dotenv").config();
const express = require("express");
const app = express();

const quotes = require("./routes/quotes");
const PORT = process.env.PORT | 3000;

app.get("/", (req, res) => {
  const usage =
    "Hello there 👋🏻, The usage of this api is as follows. ⚒️\nUse with /api/v1/quotes endpoint. ⚓\nThanks for using our API. ❤️";
  res.send(usage);
});
app.use("/api/v1/quotes", quotes);

app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));
