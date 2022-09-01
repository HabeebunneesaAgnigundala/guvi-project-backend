const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

var User = mongoose.model("UserSchema", userSchema);

module.exports = { User };
