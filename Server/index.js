require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const uri = process.env.MONGO_URL;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("success connect mongoDB");
});

app.listen(port, () => {
  console.log(`success connect port ${port}`);
});
