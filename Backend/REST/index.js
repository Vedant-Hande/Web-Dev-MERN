const { name } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const port = 3000;

app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let posts = [
  {
    id: "a4",
    name: "John Doe",
    title: "My First Post",
    content: "This is the content of my first post.",
  },
  {
    id: "a3",
    name: "Alice Smith",
    title: "Exploring Node.js",
    content: "Quick tips on Node.js development.",
  },
  {
    id: "a2",
    name: "Tom Brown",
    title: "Understanding Express.js",
    content: "This is the content of my first post.",
  },
  {
    id: "a1",
    name: "sarthak sharma",
    title: "html css js",
    content: " This is the content of my first post.",
  },
];

app.listen(port, () => {
  console.log("app is running on port " + port);
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { id, name, title, content } = req.body;
  posts.push({ id, name, title, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => {
    return id === p.id;
  });
  console.log(post);
  res.render("show.ejs", { post });
});
