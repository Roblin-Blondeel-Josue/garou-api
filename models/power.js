const mongoose = require("mongoose");

const { Schema } = mongoose;

const Power = new Schema({
  name: {
    required: false,
    type: String,
    default: null,
  },
  level: {
    required: false,
    type: Number,
    default: 0,
  },
  description: {
    required: false,
    type: String,
    default: null,
  },
});

module.exports = Power;
