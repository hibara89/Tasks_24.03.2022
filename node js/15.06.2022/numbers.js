const express = require("express");

const app = express();

app.get("/numbers", (req, res) => {
  res.send("numbers");
});

app.post("/numbers/:id", (req, res) => {
  const { num } = req.params;
  console.log(num);
});

app.listen(3000, () => {
  console.log("Server Up on port 3000");
});
