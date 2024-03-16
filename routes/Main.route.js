const express = require("express");
const router = express.Router();
const {
  createBooks,
  getBooks,
  updateBooks,
  deleteBooks,
} = require("../controllers/Book.controller");

router.get("/", getBooks);

router.post("/", createBooks);

router.put("/:id", updateBooks);

router.delete("/:id", deleteBooks);

module.exports = router;
