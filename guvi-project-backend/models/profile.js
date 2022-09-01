const mongoose = require("mongoose");

const prifileSchema = new mongoose.Schema({

  id: { type: String },
  age: { type: String },
  mobile_num: { type: String },
  adress: { type: String },
  pincode: { type: String },
});

var Profile = mongoose.model("PrifileSchema", prifileSchema);

module.exports = { Profile };
