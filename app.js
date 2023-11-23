const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(morgan("dev"));

module.exports = app;
