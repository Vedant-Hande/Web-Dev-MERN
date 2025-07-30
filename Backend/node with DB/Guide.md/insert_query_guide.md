# INSERT Query Implementation Guide

## Overview

INSERT queries are used to add new records to your database. This guide covers all aspects of INSERT operations in your student management application.

## Database Schema

### Student Table Structure

```sql
CREATE TABLE student (
    id VARCHAR(100) PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Basic INSERT Query Syntax

### 1. **Simple INSERT**

```sql
INSERT INTO student (id, username, email) VALUES (?, ?, ?);
```

### 2. **INSERT with Auto-generated ID**

```sql
INSERT INTO student (username, email) VALUES (?, ?);
```

### 3. **INSERT Multiple Records**

```sql
INSERT INTO student (id, username, email) VALUES
(?, ?, ?),
(?, ?, ?),
(?, ?, ?);
```

## Implementation in Your Application

### 1. **Node.js Route Implementation**

```javascript
// POST route to add a new student
app.post("/users/add", (req, res) => {
  try {
    const { username, email } = req.body;

    // Validate input
    if (!username || !email) {
      return res.status(400).send("Username and email are required");
    }

    // Validate email format
    if (!email.includes("@")) {
      return res.status(400).send("Invalid email format");
    }

    // Generate unique ID
    const studentId = uuidv4();

    // INSERT query
    let query = "INSERT INTO student (id, username, email) VALUES (?, ?, ?)";
    const values = [studentId, username, email];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).send("Username or email already exists");
        }
        return res.status(500).send("Database error");
      }

      console.log(
        `Student ${username} added successfully with ID: ${studentId}`
      );
      res.redirect("/users");
    });
  } catch (err) {
    console.error("Error adding student:", err.message);
    res.status(500).send("Server error");
  }
});
```

### 2. **Form Route**

```javascript
// GET route to show add student form
app.get("/users/add", (req, res) => {
  res.render("add.ejs");
});
```

## HTML Form Implementation

### Add Student Form (add.ejs)

```html
<form action="/users/add" method="POST" id="addForm">
  <div class="form-group">
    <label for="username" class="form-label">
      Username <span class="required">*</span>
    </label>
    <input
      type="text"
      id="username"
      name="username"
      class="form-input"
      placeholder="Enter username"
      required
      minlength="3"
      maxlength="50" />
    <div class="field-hint">Username must be between 3-50 characters</div>
  </div>

  <div class="form-group">
    <label for="email" class="form-label">
      Email <span class="required">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      class="form-input"
      placeholder="Enter email address"
      required
      maxlength="100" />
    <div class="field-hint">Enter a valid email address</div>
  </div>

  <button type="submit" class="btn btn-primary">Add Student</button>
</form>
```

## INSERT Query Examples

### 1. **Single Record Insert**

```javascript
// Basic INSERT
const query = "INSERT INTO student (id, username, email) VALUES (?, ?, ?)";
const values = ["uuid-123", "john_doe", "john@example.com"];

connection.query(query, values, (err, results) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log("Student added successfully");
});
```

### 2. **Multiple Records Insert**

```javascript
// Insert multiple students
const query = "INSERT INTO student (id, username, email) VALUES ?";
const students = [
  ["uuid-1", "alice", "alice@example.com"],
  ["uuid-2", "bob", "bob@example.com"],
  ["uuid-3", "charlie", "charlie@example.com"],
];

connection.query(query, [students], (err, results) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log(`${results.affectedRows} students added`);
});
```

### 3. **INSERT with Validation**

```javascript
// INSERT with input validation
const addStudent = (username, email) => {
  // Validate username
  if (!username || username.length < 3) {
    throw new Error("Username must be at least 3 characters");
  }

  // Validate email
  if (!email || !email.includes("@")) {
    throw new Error("Invalid email format");
  }

  const studentId = uuidv4();
  const query = "INSERT INTO student (id, username, email) VALUES (?, ?, ?)";
  const values = [studentId, username, email];

  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve({ id: studentId, ...results });
      }
    });
  });
};
```

## Error Handling

### 1. **Duplicate Entry Error**

```javascript
connection.query(query, values, (err, results) => {
  if (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(400).send("Username or email already exists");
    }
    return res.status(500).send("Database error");
  }
});
```

### 2. **Validation Errors**

```javascript
// Server-side validation
if (!username || !email) {
  return res.status(400).send("Username and email are required");
}

if (!email.includes("@")) {
  return res.status(400).send("Invalid email format");
}
```

### 3. **Client-side Validation**

```javascript
// JavaScript form validation
form.addEventListener("submit", function (e) {
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();

  if (username.length < 3) {
    e.preventDefault();
    alert("Username must be at least 3 characters");
    return;
  }

  if (!email.includes("@")) {
    e.preventDefault();
    alert("Please enter a valid email address");
    return;
  }
});
```

## Security Considerations

### 1. **SQL Injection Prevention**

```javascript
// ✅ Good - Use parameterized queries
const query = "INSERT INTO student (id, username, email) VALUES (?, ?, ?)";
const values = [studentId, username, email];

// ❌ Bad - Don't concatenate strings
const query = `INSERT INTO student (id, username, email) VALUES ('${studentId}', '${username}', '${email}')`;
```

### 2. **Input Sanitization**

```javascript
// Sanitize input
const sanitizeInput = (input) => {
  return input.trim().replace(/[<>]/g, "");
};

const cleanUsername = sanitizeInput(username);
const cleanEmail = sanitizeInput(email);
```

### 3. **Data Validation**

```javascript
// Comprehensive validation
const validateStudent = (username, email) => {
  const errors = [];

  if (!username || username.length < 3) {
    errors.push("Username must be at least 3 characters");
  }

  if (!email || !email.includes("@")) {
    errors.push("Invalid email format");
  }

  if (username.length > 50) {
    errors.push("Username too long");
  }

  if (email.length > 100) {
    errors.push("Email too long");
  }

  return errors;
};
```

## Testing INSERT Operations

### 1. **Using cURL**

```bash
# Add a new student
curl -X POST http://localhost:3000/users/add \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=john_doe&email=john@example.com"
```

### 2. **Using Postman**

1. Set method to POST
2. URL: `http://localhost:3000/users/add`
3. Body: x-www-form-urlencoded
4. Add key-value pairs:
   - username: john_doe
   - email: john@example.com

### 3. **Using Browser**

1. Navigate to `/users/add`
2. Fill in the form
3. Submit the form

## Advanced INSERT Techniques

### 1. **INSERT with SELECT**

```sql
-- Insert data from another table
INSERT INTO student (id, username, email)
SELECT uuid(), username, email FROM temp_students;
```

### 2. **INSERT IGNORE**

```sql
-- Ignore duplicate entries
INSERT IGNORE INTO student (id, username, email) VALUES (?, ?, ?);
```

### 3. **INSERT ON DUPLICATE KEY UPDATE**

```sql
-- Update if exists, insert if not
INSERT INTO student (id, username, email) VALUES (?, ?, ?)
ON DUPLICATE KEY UPDATE
  username = VALUES(username),
  email = VALUES(email);
```

### 4. **Bulk Insert with Transaction**

```javascript
// Insert multiple records in a transaction
const bulkInsert = async (students) => {
  return new Promise((resolve, reject) => {
    connection.beginTransaction(async (err) => {
      if (err) {
        return reject(err);
      }

      try {
        for (const student of students) {
          await new Promise((resolve, reject) => {
            const query =
              "INSERT INTO student (id, username, email) VALUES (?, ?, ?)";
            connection.query(
              query,
              [student.id, student.username, student.email],
              (err) => {
                if (err) reject(err);
                else resolve();
              }
            );
          });
        }

        connection.commit((err) => {
          if (err) {
            connection.rollback(() => reject(err));
          } else {
            resolve();
          }
        });
      } catch (error) {
        connection.rollback(() => reject(error));
      }
    });
  });
};
```

## Performance Optimization

### 1. **Batch Inserts**

```javascript
// Insert multiple records at once
const batchInsert = (students) => {
  const query = "INSERT INTO student (id, username, email) VALUES ?";
  const values = students.map((s) => [s.id, s.username, s.email]);

  return new Promise((resolve, reject) => {
    connection.query(query, [values], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
```

### 2. **Prepared Statements**

```javascript
// Use prepared statements for repeated inserts
const preparedInsert = connection.prepare(
  "INSERT INTO student (id, username, email) VALUES (?, ?, ?)"
);

// Execute prepared statement
preparedInsert.execute([studentId, username, email]);
```

## Complete Workflow

1. **User clicks "Add New Student"** on `/users` page
2. **GET `/users/add`** - Shows add student form
3. **User fills form** - Enters username and email
4. **Client-side validation** - JavaScript validates input
5. **POST `/users/add`** - Submits form to server
6. **Server validation** - Node.js validates input
7. **Database insert** - Executes INSERT query
8. **Success/Error handling** - Redirects or shows error
9. **Redirect** - Back to `/users` page to see new student

## Troubleshooting

### Common Issues

1. **Duplicate Entry Errors**

   - Check if username/email already exists
   - Use `INSERT IGNORE` or handle duplicates

2. **Validation Errors**

   - Ensure all required fields are provided
   - Check field length limits

3. **Database Connection Issues**

   - Verify database connection
   - Check table structure

4. **Form Submission Issues**
   - Check form action and method
   - Verify field names match expected properties

This INSERT implementation provides a secure, efficient way to add new students to your database with proper validation and error handling.
