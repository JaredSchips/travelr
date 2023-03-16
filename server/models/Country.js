const mongoose = require("mongoose");

const { Schema } = mongoose;

const CountrySchema = new Schema({
    name: {
    type: String,
    required: true,
    trim: true,
  },
})


module.exports = CountrySchema;
