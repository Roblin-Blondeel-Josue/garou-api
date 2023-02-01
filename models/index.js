const mongoose = require("mongoose");

const db = {};

db.character = mongoose.model("Character", require("./character"));

module.exports = db;
