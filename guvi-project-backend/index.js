const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { userRoute } = require("./routes/user");
const { profileRoute } = require("./routes/profile");

const app = express();

const CONNECTION_URL =
  "mongodb+srv://alla:mongosri123@cluster0.of0yk.mongodb.net/?retryWrites=true&w=majority";
  
mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log("database connected sucessfully..."));

app.use(cors());

app.use(express.json());

app.use("/auth", userRoute);
app.use("/profile", profileRoute);

app.listen(4000, () => {
  console.log("listening");
});
