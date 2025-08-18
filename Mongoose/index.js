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

// Student Schema ---- strucutre of the data
// This schema defines the structure of the student data in the MongoDB database
const studentSchema = new mongoose.Schema({
  // Personal Information
  name: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    maxlength: [50, "First name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"],
  },
});

const Student = mongoose.model("Student", studentSchema);

Student.find({})
  .then((res) => {
    console.log("All Students:", res);
  })
  .catch((err) => {
    console.log("Error fetching students:", err);
  });

// const student5 = new Student({
//   name: "Johnman",
//   email: "johnma35n@gmail.com",
//   phoneNumber: "+1232361231",
// });

// student5.save(); // to save the data in the database

// console.log("Student saved:", student5);
