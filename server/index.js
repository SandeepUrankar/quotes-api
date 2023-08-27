require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const quotes = require("./routes/quotes");
const PORT = process.env.PORT | 3000;

const corsOptions = {
  origin: ["https://quote-2pv6.onrender.com", "http://127.0.0.1:5500"],
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  const usage =
    "Hello there 👋🏻, The usage of this api is as follows. ⚒️\nUse with /api/v1/quotes endpoint. ⚓\nThanks for using our API. ❤️";
  res.send(usage);
});
app.use("/api/v1/quotes", quotes);

app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));
