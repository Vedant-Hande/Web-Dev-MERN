const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  //   res.send(`standred get responce ${username} `);
  res.render("welcome.ejs", { username });
  console.log(username, password);
  console.log("request received get");
});

app.post("/register", (req, res) => {
  let { username, password } = req.body;
  //   res.send(`standred post responce ${username} `);
  res.render("welcome.ejs", { username });
  console.log(username, password);
  console.log("request received post");
});
