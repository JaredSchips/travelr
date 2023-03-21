const mongoose = require("mongoose");
const City = require("./Country");
const Comment = require("./Comment");
const { Schema } = mongoose;

const chatSchema = new Schema({
  city: {
    type: City,
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
