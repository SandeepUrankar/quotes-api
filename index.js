require("dotenv").config();
const express = require("express");
const app = express();

const quotes = require("./routes/quotes");
const PORT = process.env.PORT | 3000;

app.use("/api/v1/quotes", quotes);

app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));
