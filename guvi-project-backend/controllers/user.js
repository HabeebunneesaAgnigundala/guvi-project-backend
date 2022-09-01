// import { con } from "../DB/mongooseCon";
const { User } = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const signup = async (req, res) => {
  console.log("calling signup......");
  const { firstname, lastname, email, password } = req.body;
  console.log({ firstname, lastname, email, password });
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.sendStatus(400);
    }
    const id = uuidv4();
    const newUser = await User.create({
      id,
      name: `${firstname} ${lastname}`,
      email,
      password,
    });
    console.log(newUser);
    return res.status(200).json({ id: newUser.id });
  } catch (err) {
    res.sendStatus(500);
    console.log("err");
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(400);
    return res.status(200).json({ id: user.id });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signup, signin };
