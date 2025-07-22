const { name } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let posts = [
  {
    name: "John Doe",
    title: "My First Post",
    content: "This is the content of my first post.",
  },
  {
    name: "John Doe",
    title: "My First Post",
    content: "This is the content of my first post.",
  },
  {
    name: "John Doe",
    title: "My First Post",
    content: "This is the content of my first post.",
  },
  {
    name: "John Doe",
    title: "My First Post",
    content: "This is the content of my first post.",
  },
];

app.listen(port, () => {
  console.log("app is running on port " + port);
});

app.get("/posts", (req, res) => {
  // res.send("server is running");
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { name, title, content } = req.body;
  posts.push({ name, title, content });
  res.redirect("/posts");
});
