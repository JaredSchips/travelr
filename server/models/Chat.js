const mongoose = require("mongoose");
const Country = require("./Country");
const Comment = require("./Comment");
const { Schema } = mongoose;

const chatSchema = new Schema({
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

const Chat = mongoose.model("Chat", chatSchema)

module.exports = Chat;
