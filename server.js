/* eslint-disable no-restricted-syntax */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const setupRoutes = require("./routes/index");

mongoose.set("strictQuery", false);

// const mongoString = process.env.DATABASE_URL;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/garou-api");
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();
const corsOptions = {
  origin: [
    "https://garou-api.onrender.com/",
    "https://character-in-pocket.vercel.app/",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5000",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};


app.use(cors(corsOptions));
app.use(express.json());
setupRoutes(app);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
module.exports = app;
