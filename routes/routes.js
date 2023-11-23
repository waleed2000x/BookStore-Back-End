// const app = require('../app')
const express = require("express");
const {
  getAllBooks,
  createBooks,
  deleteBook,
} = require("../controllers/controllers");

const router = express.Router();

router.route("/", router).get(getAllBooks).post(createBooks);
router.route("/:id").delete(deleteBook);

module.exports = router;
