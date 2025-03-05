const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");

const product = require("./route/product");
const user = require("./route/user");
const cart = require("./route/cart");

connectDB();

const dotEnv = require("dotenv");
dotEnv.config();
const port = process.env.PORT;

app.use(express.json());
app.use("/products", product);
app.use("/cart", cart);
app.use(user);

app.get("/", (req, res) => {
  console.log("test");
  res.send("hello");
});

app.listen(port, (req, res) => {
  console.log(port);
});
