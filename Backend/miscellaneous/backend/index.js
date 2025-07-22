const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

app.use(express.urlencoded({ extended: true })); /// use this midddleware to parse (cant get acces like the get) data goes into the body the body of the post request
// app.use(express.json()); // use this middleware to parse the json body of the post request

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
