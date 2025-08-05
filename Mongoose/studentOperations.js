const mongoose = require("mongoose");
const Student = require("./index");

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/studentDB");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Example: Create a new student
async function createStudent() {
  try {
    const newStudent = new Student({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@university.edu",
      phoneNumber: "+1234567890",
      dateOfBirth: new Date("2000-05-15"),
      gender: "Male",
      studentId: "STU2024001",
      currentGrade: "Junior",
      department: "Computer Science",
      major: "Software Engineering",
      gpa: 3.8,
      address: {
        street: "123 University Ave",
        city: "Boston",
        state: "MA",
        zipCode: "02108",
        country: "USA",
      },
      emergencyContact: {
        name: "Jane Doe",
        relationship: "Mother",
        phone: "+1234567891",
      },
      interests: ["Programming", "Web Development", "Machine Learning"],
    });

    const savedStudent = await newStudent.save();
    console.log("Student created successfully:", savedStudent.getStudentInfo());
    return savedStudent;
  } catch (error) {
    console.error("Error creating student:", error.message);
  }
}

// Example: Find all students
async function getAllStudents() {
  try {
    const students = await Student.find();
    console.log("All students:", students.length);
    students.forEach((student) => {
      console.log(student.getStudentInfo());
    });
    return students;
  } catch (error) {
    console.error("Error fetching students:", error.message);
  }
}

// Example: Find student by ID
async function findStudentById(studentId) {
  try {
    const student = await Student.findById(studentId);
    if (student) {
      console.log("Found student:", student.getStudentInfo());
      console.log("Full name:", student.fullName);
      console.log("Age:", student.age);
    } else {
      console.log("Student not found");
    }
    return student;
  } catch (error) {
    console.error("Error finding student:", error.message);
  }
}

// Example: Update student GPA
async function updateStudentGPA(studentId, newGPA) {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { gpa: newGPA },
      { new: true, runValidators: true }
    );
    if (updatedStudent) {
      console.log("Student GPA updated:", updatedStudent.getStudentInfo());
    } else {
      console.log("Student not found");
    }
    return updatedStudent;
  } catch (error) {
    console.error("Error updating student:", error.message);
  }
}

// Example: Find students by department
async function findStudentsByDepartment(department) {
  try {
    const students = await Student.findByDepartment(department);
    console.log(`Students in ${department}:`, students.length);
    students.forEach((student) => {
      console.log(student.getStudentInfo());
    });
    return students;
  } catch (error) {
    console.error("Error finding students by department:", error.message);
  }
}

// Example: Find high performing students
async function findHighPerformers(minGPA = 3.5) {
  try {
    const students = await Student.findHighPerformers(minGPA);
    console.log(`High performers (GPA >= ${minGPA}):`, students.length);
    students.forEach((student) => {
      console.log(`${student.fullName} - GPA: ${student.gpa}`);
    });
    return students;
  } catch (error) {
    console.error("Error finding high performers:", error.message);
  }
}

// Example: Delete student
async function deleteStudent(studentId) {
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    if (deletedStudent) {
      console.log("Student deleted:", deletedStudent.getStudentInfo());
    } else {
      console.log("Student not found");
    }
    return deletedStudent;
  } catch (error) {
    console.error("Error deleting student:", error.message);
  }
}

// Example: Advanced queries
async function advancedQueries() {
  try {
    // Find students with GPA between 3.0 and 4.0
    const goodStudents = await Student.find({
      gpa: { $gte: 3.0, $lte: 4.0 },
    });
    console.log("Students with GPA 3.0-4.0:", goodStudents.length);

    // Find students enrolled in the last year
    const recentStudents = await Student.find({
      enrollmentDate: {
        $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
      },
    });
    console.log("Students enrolled in the last year:", recentStudents.length);

    // Find students by name pattern
    const johnStudents = await Student.find({
      firstName: { $regex: /^John/i },
    });
    console.log("Students named John:", johnStudents.length);

    // Aggregate to get average GPA by department
    const avgGPAByDept = await Student.aggregate([
      {
        $group: {
          _id: "$department",
          avgGPA: { $avg: "$gpa" },
          count: { $sum: 1 },
        },
      },
      { $sort: { avgGPA: -1 } },
    ]);
    console.log("Average GPA by department:", avgGPAByDept);
  } catch (error) {
    console.error("Error in advanced queries:", error.message);
  }
}

// Run examples
async function runExamples() {
  await connectDB();

  console.log("\n=== Creating a new student ===");
  const newStudent = await createStudent();

  console.log("\n=== Finding all students ===");
  await getAllStudents();

  if (newStudent) {
    console.log("\n=== Finding student by ID ===");
    await findStudentById(newStudent._id);

    console.log("\n=== Updating student GPA ===");
    await updateStudentGPA(newStudent._id, 3.9);

    console.log("\n=== Finding students by department ===");
    await findStudentsByDepartment("Computer Science");

    console.log("\n=== Finding high performers ===");
    await findHighPerformers(3.5);

    console.log("\n=== Advanced queries ===");
    await advancedQueries();

    console.log("\n=== Deleting student ===");
    await deleteStudent(newStudent._id);
  }

  // Close connection
  await mongoose.connection.close();
  console.log("Database connection closed");
}

// Export functions for use in other files
module.exports = {
  connectDB,
  createStudent,
  getAllStudents,
  findStudentById,
  updateStudentGPA,
  findStudentsByDepartment,
  findHighPerformers,
  deleteStudent,
  advancedQueries,
  runExamples,
};

// Run examples if this file is executed directly
if (require.main === module) {
  runExamples().catch(console.error);
}
