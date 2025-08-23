const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  person: {
    type: String,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLenghth: 100,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const chat = mongoose.model("chat", chatSchema);
module.exports = chat;
