const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://hiba:hib1mar2@cluster0.jt76s.mongodb.net/mearntutorial?retryWrites=true&w=majority",
  () => {
    console.log("mongoose");
  }
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
