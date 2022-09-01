const express = require("express");
const userRoute = express.Router();

const { signup, signin } = require("../controllers/user");

userRoute.post("/signin", signin);

userRoute.post("/signup", signup);

module.exports = { userRoute };
