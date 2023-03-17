const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = CommentSchema;
