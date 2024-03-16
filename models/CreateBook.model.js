const mongoose = require("mongoose");

const CreateBookSchema = new mongoose.Schema(
  {
    kitapAd: String,

    yazarAd: String,

    ISBN: Number,

    yayinlanmaYili: String,
    tur: String,
    kapakResmi: String,
  },

  {
    timestamps: true,
  }
);

const CreateBook = mongoose.model("CreateBook", CreateBookSchema);

module.exports = CreateBook;
