const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const Main = require("./routes/Main.route");
const cors = require("cors");

//! ENV'DEN ŞİFRELERİ ALMAK
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";
const MONGO = process.env.MONGO;

//! JSON Dosyları okuma
app.use(express.json());
app.use(cors());

//! MONGOOSE İLE MONGODB'DE CONNECT
mongoose
  .connect(MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//! ROUTES
app.use("/", Main);

//! SERVER'I KULLANMAK
app.listen(PORT, HOST, () => {
  console.log(`Server is  running at http://${HOST}:${PORT}`);
});
