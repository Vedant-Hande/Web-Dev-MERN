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
    minlength: [2, "First name must be at least 2 characters"],
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
  age: { type: Number, min: 18, required: [true, "Age is required"] },
});

const Student = mongoose.model("Student", studentSchema);

// using find() ------
/** Student.find({})
  .then((res) => {
    console.log("Students:", res[0].phoneNumber);
  })
  .catch((err) => {
    console.log("Error fetching students:", err);
  });**/

// using findOne() ------
// This method retrieves a single student document based on the provided criteria
// In this case, it fetches the student with the specified _id
Student.findOne({ _id: "68923379a7dbd12d0ad016c1" })
  .then((res) => {
    console.log("Students:", res);
  })
  .catch((err) => {
    console.log("Error fetching students:", err);
  });

// using findOneAndUpdate() ------
// This method updates a single student document based on the provided criteria

Student.findOneAndUpdate(
  { _id: "68923379a7dbd12d0ad016c1" },
  { age: 20 },
  { new: true },
  { runValidators: true } // This option ensures that the update respects the schema validation rules
)
  .then((res) => {
    console.log("Updated Student:", res);
  })
  .catch((err) => {
    console.log("Error updating student:", err.errors.age.property.message);
  });
// Student.findByIdAndUpdate(
//   { _id: "6892360270f31005cd48800d" },
//   { age: 25 },
//   { new: true }
// )
//   .then((res) => {
//     console.log("Updated Student:", res);
//   })
//   .catch((err) => {
//     console.log("Error updating student:", err);
//   });

// using delete ----
Student.findByIdAndDelete({ _id: "6892360270f31005cd48800d" })
  .then((res) => {
    console.log("Deleted Student:", res);
  })
  .catch((err) => {
    console.log("Error deleting student:", err);
  });

// const student5 = new Student({
//   name: "Johnman",
//   email: "johnma35n@gmail.com",
//   phoneNumber: "+1232361231",
// });

// student5.save(); // to save the data in the database
