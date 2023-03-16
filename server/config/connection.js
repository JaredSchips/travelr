const mongoose = require("mongoose");

// need to add URL for database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/travelrDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Bind connection events
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB database"));

module.exports = db;
