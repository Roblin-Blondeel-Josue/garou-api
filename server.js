/* eslint-disable no-restricted-syntax */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const setupRoutes = require("./routes/index");

mongoose.set("strictQuery", false);

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(cors());
app.use(express.json());
const routes = require("./routes/character");

app.use("/", routes);
setupRoutes(app);
app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
