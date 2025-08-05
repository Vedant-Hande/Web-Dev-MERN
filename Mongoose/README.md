# Student Management System - Mongoose Schema

This project contains a comprehensive student schema built with Mongoose for MongoDB. The schema includes all necessary fields for a complete student management system.

## Features

### 📋 Schema Fields

#### Personal Information

- **firstName** (String, required): Student's first name (max 50 characters)
- **lastName** (String, required): Student's last name (max 50 characters)
- **email** (String, required, unique): Student's email address with validation
- **phoneNumber** (String, required): Student's phone number with validation
- **dateOfBirth** (Date, required): Student's date of birth
- **gender** (String, enum): Gender selection (Male, Female, Other)

#### Academic Information

- **studentId** (String, required, unique): Unique student identifier
- **enrollmentDate** (Date): Date of enrollment (defaults to current date)
- **currentGrade** (String, enum): Current academic grade level
- **department** (String, enum): Academic department
- **major** (String, required): Student's major field of study
- **gpa** (Number): Grade Point Average (0.0 - 4.0, default 0.0)

#### Address Information

- **address** (Object): Complete address structure
  - street (String, required)
  - city (String, required)
  - state (String, required)
  - zipCode (String, required, with validation)
  - country (String, default: "USA")

#### Emergency Contact

- **emergencyContact** (Object): Emergency contact information
  - name (String, required)
  - relationship (String, required)
  - phone (String, required)

#### Academic Status

- **enrollmentStatus** (String, enum): Current enrollment status
- **graduationDate** (Date): Expected or actual graduation date

#### Additional Information

- **profilePicture** (String): Profile picture URL (default: "default-avatar.jpg")
- **bio** (String): Student biography (max 500 characters)
- **interests** (Array): Array of student interests

#### Timestamps

- **createdAt** (Date): Record creation timestamp
- **updatedAt** (Date): Last update timestamp

## 🚀 Advanced Features

### Virtual Properties

- **fullName**: Automatically combines firstName and lastName
- **age**: Calculates age from dateOfBirth

### Instance Methods

- **getStudentInfo()**: Returns formatted student information

### Static Methods

- **findByDepartment(department)**: Find all students in a specific department
- **findHighPerformers(minGPA)**: Find students with GPA above threshold

### Middleware

- **Pre-save**: Automatically updates the updatedAt timestamp
- **Timestamps**: Automatic createdAt and updatedAt management

## 📝 Usage Examples

### Basic CRUD Operations

```javascript
const Student = require("./index");

// Create a new student
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
  },
  emergencyContact: {
    name: "Jane Doe",
    relationship: "Mother",
    phone: "+1234567891",
  },
});

// Save the student
const savedStudent = await newStudent.save();
console.log(savedStudent.getStudentInfo());
```

### Query Examples

```javascript
// Find all students
const allStudents = await Student.find();

// Find student by ID
const student = await Student.findById(studentId);

// Find students by department
const csStudents = await Student.findByDepartment("Computer Science");

// Find high performers
const highPerformers = await Student.findHighPerformers(3.5);

// Update student GPA
const updatedStudent = await Student.findByIdAndUpdate(
  studentId,
  { gpa: 3.9 },
  { new: true, runValidators: true }
);

// Delete student
await Student.findByIdAndDelete(studentId);
```

### Advanced Queries

```javascript
// Find students with GPA between 3.0 and 4.0
const goodStudents = await Student.find({
  gpa: { $gte: 3.0, $lte: 4.0 },
});

// Find students enrolled in the last year
const recentStudents = await Student.find({
  enrollmentDate: { $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) },
});

// Find students by name pattern
const johnStudents = await Student.find({
  firstName: { $regex: /^John/i },
});

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
```

## 🛠️ Setup and Installation

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start MongoDB**
   Make sure MongoDB is running on your local machine or update the connection string.

3. **Run Examples**
   ```bash
   node studentOperations.js
   ```

## 📊 Validation Rules

### Email Validation

- Must be a valid email format
- Automatically converted to lowercase
- Must be unique across all students

### Phone Number Validation

- Must be a valid phone number format
- Supports international formats

### GPA Validation

- Must be between 0.0 and 4.0
- Cannot be negative

### Zip Code Validation

- Must be in US format (12345 or 12345-6789)

### Required Fields

- firstName, lastName, email, phoneNumber
- dateOfBirth, gender, studentId
- currentGrade, department, major
- Complete address information
- Emergency contact information

## 🎯 Enum Values

### Gender

- "Male", "Female", "Other"

### Current Grade

- "9th", "10th", "11th", "12th"
- "Freshman", "Sophomore", "Junior", "Senior"

### Department

- "Computer Science", "Engineering", "Business"
- "Arts", "Science", "Medicine", "Law", "Education"

### Enrollment Status

- "Active", "Inactive", "Graduated", "Suspended", "Withdrawn"

## 🔧 Customization

You can easily customize the schema by:

1. **Adding new fields**: Simply add new properties to the schema
2. **Modifying validation**: Update validation rules for existing fields
3. **Adding new methods**: Create custom instance or static methods
4. **Extending enums**: Add new values to enum arrays

## 📈 Performance Considerations

- Indexes are automatically created for unique fields (email, studentId)
- Virtual properties are computed on-demand
- Timestamps are managed automatically
- Validation runs on save and update operations

## 🚨 Error Handling

The schema includes comprehensive error handling:

- Validation errors with descriptive messages
- Unique constraint violations
- Type checking for all fields
- Custom error messages for required fields

## 📝 License

This project is part of the Web-Dev-MERN learning series.
