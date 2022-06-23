import express from "express";
import mongoose from "mongoose";
import { PORT, MONGO_URI } from "./config.js";
import { router } from "./routes/posts.js";
import bodyParser from "body-parser";

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use("/posts", router);

//Routes

app.get("/", (req, res) => {
  res.send("we are on home");
});

//connect to DB

mongoose.connect(MONGO_URI, () => {
  console.log("connected to mongodb");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("error");
  }
  console.log("server is up");
});
