const mongoose = require("mongoose");
const chats = require("./models/chats");

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

// Create multiple chat documents
const chatData = [
  {
    person: "Alice",
    to: "Bob",
    msg: "Hello, Bob!",
  },
  {
    person: "Bob",
    to: "Alice",
    msg: "Hi, Alice!",
  },
  {
    person: "Charlie",
    to: "Alice",
    msg: "Hey Alice, how are you?",
  },
  {
    person: "Alice",
    to: "Charlie",
    msg: "I'm good, Charlie!",
  },
  {
    person: "Dave",
    to: "Bob",
    msg: "Bob, are you coming to the party?",
  },
];

chats
  .insertMany(chatData)
  .then((result) => {
    console.log("Chats inserted:", result);
  })
  .catch((err) => {
    console.log("Error inserting chats:", err);
  });
