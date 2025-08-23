const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chats");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

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

app.get("/", (req, res) => {
  res.render("main.ejs");
});

app.get("/chats")

// Create and save a new chat message
// let chat_1 = new chat({
//   From_person: "Alice",
//   to: "Bob",
//   msg: "Hello, Bob!",
// });

// chat_1
//   .save()
//   .then((result) => {
//     console.log("Chat message saved:", result);
//   })
//   .catch((err) => {
//     console.log("Error saving chat message:", err);
//   });
