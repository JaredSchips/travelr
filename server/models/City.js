const mongoose = require("mongoose");

const { Schema } = mongoose;

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
})


module.exports = citySchema;
