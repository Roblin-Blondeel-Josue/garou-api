const mongoose = require("mongoose");

const { Schema } = mongoose;

const Auspice = new Schema({
  name: {
    required: true,
    type: String,
  },
  moon: {
    required: true,
    unique: false,
    type: String,
  },
  bonus: {
    required: true,
    type: String,
  },
  rage: {
    required: true,
    type: Number,
  },
});

module.exports = Auspice;
