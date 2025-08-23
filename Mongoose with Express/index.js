const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chats");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.use(express.static("public"));

//middleware to parse data
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

async function main() {
  await mongoose.connect("mongodb://localhost:27017/whatsapp_clone");
}

main()
  .then((result) => {
    console.log(`connected to mongoDB`);
  })
  .catch((err) => {
    console.log("error connecting to mongoDB", err);
  });

// default route
app.get("/", (req, res) => {
  res.render("main.ejs");
});

// fetch all chats messages route
app.get("/chats", async (req, res) => {
  let chats = await chat.find();
  res.render("chats.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("newchat.ejs");
});
