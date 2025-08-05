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

// Student Schema
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
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please enter a valid email",
    // ],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of birth is required"],
  },
  
});

const Student = mongoose.model("Student", studentSchema);

