const express = require("express");
const profileRoute = express.Router();

const { update, profileInfo } = require("../controllers/profile");

profileRoute.get("/profileInfo", profileInfo);

profileRoute.post("/update", update);

module.exports = { profileRoute };
