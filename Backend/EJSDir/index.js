const express = require("express");
const path = require("path");
const app = express();

const port = 3000;
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("server is listening", port);
});

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  let rollDise = Math.ceil(Math.random() * 6);
  res.render("home.ejs", { rollDise });
  // res.render("home.ejs", { rollDise: rollDise });
  // res.render("home.ejs", { dise: rollDise });
});
