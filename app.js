const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/routes");
const app = express();

dotenv.config({ path: "./config.env" });
const corsOptions = {
  origin: ["https://book-haven-hub.vercel.app", "http://localhost:5173"],
  credentials: false,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use("/books", router);

module.exports = app;
