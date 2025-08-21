const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

async function main() {
  await mongoose.connect("mongodb://localhost:27017/whatapp");
}

main()
  .then((result) => {
    console.log(`connected to mongoDB`);
  })
  .catch((err) => {
    console.log("error connecting to mongoDB", err);
  });

app.get("/", (req, res) => {
  res.send("Welcome to the Mongoose with Express app!");
});
