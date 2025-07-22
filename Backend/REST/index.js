const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("app is running on port " + port);
});

app.get("/")