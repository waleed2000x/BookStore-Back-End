const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const router = require("./routes/routes");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(morgan("dev"));
app.use("/books", router);
module.exports = app;
