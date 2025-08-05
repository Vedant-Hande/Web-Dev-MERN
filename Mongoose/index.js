const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

main()
  .then((result) => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log("error connecting to mongoDB", err);
  });

main();

const userSchema ={
    name:
}

