const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const port = 3000;

app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));

//middlewares->
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let posts = [
  {
    id: uuidv4(),
    name: "John Doe",
    title: "My First Post",
    content: "This is the content of my first post.",
  },
  {
    id: uuidv4(),
    name: "Alice Smith",
    title: "Exploring Node.js",
    content: "Quick tips on Node.js development.",
  },
  {
    id: uuidv4(),
    name: "Tom Brown",
    title: "Understanding Express.js",
    content: "This is the content of my first post.",
  },
  {
    id: uuidv4(),
    name: "sarthak sharma",
    title: "html css js",
    content: " This is the content of my first post.",
  },
];

app.listen(port, () => {
  console.log("app is running on port " + port);
});

//root
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// creating new post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

// form sending request to post --new.ejs
app.post("/posts", (req, res) => {
  let { name, title, content } = req.body;
  let id = uuidv4(); // Generate a unique ID for the post
  posts.push({ id, name, title, content });
  res.redirect("/posts");
});

//detailed post show
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.render("show.ejs", { post: post });
});

// updating data of post {patch req by form -- edit.ejs}
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newName = req.body.name;
  let newTitle = req.body.title;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.name = newName;
  post.title = newTitle;
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.render("edit.ejs", { post });
});

// Deleting post
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id != p.id);
  res.redirect("/posts");
});
