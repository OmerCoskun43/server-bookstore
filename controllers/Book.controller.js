const CreateBook = require("../models/CreateBook.model");

module.exports = {
  getBooks: async (req, res) => {
    try {
      const books = await CreateBook.find().sort({ createdAt: -1 });

      res.send({
        success: true,
        books: books,
      });
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  },

  createBooks: async (req, res) => {
    try {
      const data = await req.body;
      const newBook = new CreateBook(data);
      newBook.save();
      res.send({
        success: true,
        newBook: newBook,
        message: "Book created successfully",
      });
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  },

  updateBooks: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedBook = await CreateBook.findByIdAndUpdate(id, req.body);
      res.send({
        success: true,
        updatedBook: updatedBook,
        message: "Book updated successfully",
      });
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  },

  deleteBooks: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedBook = await CreateBook.findByIdAndDelete(id);
      res.send({
        success: true,
        deletedBook: deletedBook,
        message: "Book deleted successfully",
      });
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  },
};
