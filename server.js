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
const corsOptions = {
  origin: [
    "https://garou-the-api.vercel.app/",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5000",
  ],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const routes = require("./routes/character");

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", routes);
setupRoutes(app);
app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
module.exports = app;
