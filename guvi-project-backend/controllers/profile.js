const { Profile } = require("../models/profile");

const update = async (req, res) => {
  const { id, age, dob, contact, address, pincode } = req.body;
  try {
    const u = await Profile.find({ id });
    if (u) {
      await Profile.updateOne({ id }, { age, dob, contact, address, pincode });
      res.status(200).json({ msg: "done" });
    } else {
      await Profile.create({ id, age, dob, contact, address, pincode });
      res.status(200).json({ msg: "done" });
    }
  } catch (err) {
    res.status(500).json({ msg: "not sucessfull" });
  }
};

const profileInfo = async (req, res) => {
  const { id } = req.body;
  try {
    const profile_details = await Profile.find({ id });
    res.status(200).json({ profile_details });
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "not successful" });
  }
};

module.exports = { update, profileInfo };
