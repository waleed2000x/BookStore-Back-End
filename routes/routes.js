// const app = require('../app')
const express = require("express");
const {
  getBooks,
  createBooks,
  deleteBook,
  getBook,
  updateBook,
} = require("../controllers/controllers");

const router = express.Router();

router.route("/", router).get(getBooks).post(createBooks);
router.route("/:id").get(getBook).delete(deleteBook).patch(updateBook);

module.exports = router;
