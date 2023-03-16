const mongoose = require("mongoose");
const Country = require("./Country");
const { Schema } = mongoose;

const Chat = new Schema({
  country: {
    type: [Country],
    required: true,
  },
  comments: {
    type: [Comment],
    required: true,
    default: [],
  },
});

module.exports = Chat;
