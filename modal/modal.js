const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of the book is required"],
      trim: true,
      unique: true,
    },
    author: {
      type: String,
      required: [true, "Author of the book is required"],
      trim: true,
    },
    publishedYear: {
      type: Number,
      required: [true, "Published Year is required"],
    },
  },
  {
    timestamp: true,
  }
);

const Modal = new mongoose.model("Schema", Schema);

module.exports = Modal;
