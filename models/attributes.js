const mongoose = require("mongoose");

const { Schema } = mongoose;

const Attributes = new Schema({
  str: {
    required: true,
    type: Number,
    default: 1,
  },
  dex: {
    required: true,
    type: Number,
    default: 1,
  },
  sta: {
    required: true,
    type: Number,
    default: 1,
  },
  app: {
    required: true,
    type: Number,
    default: 1,
  },
  man: {
    required: true,
    type: Number,
    default: 1,
  },
  cha: {
    required: true,
    type: Number,
    default: 1,
  },
  per: {
    required: true,
    type: Number,
    default: 1,
  },
  int: {
    required: true,
    type: Number,
    default: 1,
  },
  wit: {
    required: true,
    type: Number,
    default: 1,
  },
});

module.exports = Attributes;
