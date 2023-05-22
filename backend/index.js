/** @format */

const express = require("express");
const cors = require("cors");
const products = require("./product");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("Welcome to our online App Store");
});

app.get("/products", (req, resp) => {
  resp.send(products);
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, console.log(`server running on port ${PORT}`));
