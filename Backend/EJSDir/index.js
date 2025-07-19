const express = require("express");
const path = require("path");
const instaData = require("./data.json");
const app = express();

const port = 3000;
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("server is listening", port);
});

app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:account", (req, res) => {
  let { account } = req.params;
  console.log(instaData[account]);
  res.render("home.ejs", { data: instaData[account] });
});

app.get("/", (req, res) => {
  let rollDise = Math.ceil(Math.random() * 6);
  res.render("rolldise.ejs", { roll: rollDise });
  // res.render("rollDise.ejs", { rollDise: rollDise });
  // res.render("rollDise.ejs", { dise: rollDise });
});
