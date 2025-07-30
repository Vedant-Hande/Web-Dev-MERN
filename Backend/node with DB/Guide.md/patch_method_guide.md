# PATCH Method Implementation Guide

## Overview

The PATCH HTTP method is used for **partial updates** to resources. Unlike PUT which replaces an entire resource, PATCH allows you to update only specific fields while leaving others unchanged.

## Implementation in Your Application

### 1. PATCH Route Setup

```javascript
// PATCH route to update a specific student
app.patch("/users/:id", (req, res) => {
  try {
    const studentId = req.params.id;
    const { username, email } = req.body;

    // Build dynamic query based on provided fields
    let updateFields = [];
    let values = [];

    if (username !== undefined && username !== "") {
      updateFields.push("username = ?");
      values.push(username);
    }

    if (email !== undefined && email !== "") {
      updateFields.push("email = ?");
      values.push(email);
    }

    if (updateFields.length === 0) {
      return res.status(400).send("No fields to update");
    }

    values.push(studentId); // Add student ID for WHERE clause

    let query = `UPDATE student SET ${updateFields.join(", ")} WHERE id = ?`;

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        return res.status(500).send("Database error");
      }

      if (results.affectedRows === 0) {
        return res.status(404).send("Student not found");
      }

      console.log(`Student ${studentId} updated successfully`);
      res.redirect("/users");
    });
  } catch (err) {
    console.error("Error updating student:", err.message);
    res.status(500).send("Server error");
  }
});
```

### 2. Edit Form Route

```javascript
// GET route to show edit form for a specific student
app.get("/users/:id/edit", (req, res) => {
  try {
    const studentId = req.params.id;
    let query = "SELECT * FROM student WHERE id = ?";
    connection.query(query, [studentId], (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        return res.status(500).send("Database error");
      }
      if (results.length === 0) {
        return res.status(404).send("Student not found");
      }
      res.render("edit.ejs", { student: results[0] });
    });
  } catch (err) {
    console.error("Error showing edit form:", err.message);
  }
});
```

## Key Features of PATCH Implementation

### 1. **Partial Updates Only**

- Only updates fields that are provided in the request
- Empty fields are ignored (not set to null)
- Maintains existing data for unchanged fields

### 2. **Dynamic Query Building**

```javascript
// Build dynamic query based on provided fields
let updateFields = [];
let values = [];

if (username !== undefined && username !== "") {
  updateFields.push("username = ?");
  values.push(username);
}

if (email !== undefined && email !== "") {
  updateFields.push("email = ?");
  values.push(email);
}

let query = `UPDATE student SET ${updateFields.join(", ")} WHERE id = ?`;
```

### 3. **Method Override**

Uses `method-override` middleware to handle PATCH requests from HTML forms:

```javascript
app.use(methodOverride("_method"));
```

Form action: `action="/users/<%= student.id %>?_method=PATCH"`

## HTML Form Implementation

### Edit Form (edit.ejs)

```html
<form action="/users/<%= student.id %>?_method=PATCH" method="POST">
  <div class="form-group">
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      value="<%= student.username || '' %>"
      placeholder="Enter new username" />
    <div class="field-hint">Leave empty to keep current username</div>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      value="<%= student.email || '' %>"
      placeholder="Enter new email" />
    <div class="field-hint">Leave empty to keep current email</div>
  </div>

  <button type="submit">Update Student</button>
</form>
```

## Usage Examples

### 1. **Update Only Username**

```javascript
// Request body
{
  "username": "new_username"
}

// SQL generated
UPDATE student SET username = ? WHERE id = ?
```

### 2. **Update Only Email**

```javascript
// Request body
{
  "email": "newemail@example.com"
}

// SQL generated
UPDATE student SET email = ? WHERE id = ?
```

### 3. **Update Both Fields**

```javascript
// Request body
{
  "username": "new_username",
  "email": "newemail@example.com"
}

// SQL generated
UPDATE student SET username = ?, email = ? WHERE id = ?
```

### 4. **No Fields Provided**

```javascript
// Request body
{
}

// Response: 400 Bad Request
// "No fields to update"
```

## Error Handling

### 1. **Validation Errors**

```javascript
if (updateFields.length === 0) {
  return res.status(400).send("No fields to update");
}
```

### 2. **Database Errors**

```javascript
if (err) {
  console.error("Error executing query:", err.message);
  return res.status(500).send("Database error");
}
```

### 3. **Not Found Errors**

```javascript
if (results.affectedRows === 0) {
  return res.status(404).send("Student not found");
}
```

## Security Considerations

### 1. **SQL Injection Prevention**

- Uses parameterized queries with `?` placeholders
- Values are passed separately from the query string

### 2. **Input Validation**

```javascript
// Validate email format
if (email && !email.includes("@")) {
  return res.status(400).send("Invalid email format");
}
```

### 3. **Access Control**

```javascript
// Add authentication middleware if needed
app.patch("/users/:id", authenticateUser, (req, res) => {
  // Update logic
});
```

## Testing PATCH Endpoints

### 1. **Using cURL**

```bash
# Update username only
curl -X PATCH http://localhost:3000/users/123 \
  -H "Content-Type: application/json" \
  -d '{"username": "new_username"}'

# Update email only
curl -X PATCH http://localhost:3000/users/123 \
  -H "Content-Type: application/json" \
  -d '{"email": "newemail@example.com"}'

# Update both fields
curl -X PATCH http://localhost:3000/users/123 \
  -H "Content-Type: application/json" \
  -d '{"username": "new_username", "email": "newemail@example.com"}'
```

### 2. **Using Postman**

1. Set method to PATCH
2. URL: `http://localhost:3000/users/123`
3. Body: raw JSON
4. Content-Type: application/json

### 3. **Using Browser Form**

1. Navigate to `/users/123/edit`
2. Fill in desired fields
3. Leave unwanted fields empty
4. Submit form

## Comparison with Other HTTP Methods

| Method     | Purpose                 | Request Body     | Response             |
| ---------- | ----------------------- | ---------------- | -------------------- |
| **GET**    | Retrieve data           | Empty            | Data                 |
| **POST**   | Create new resource     | Full data        | Created resource     |
| **PUT**    | Replace entire resource | Full data        | Updated resource     |
| **PATCH**  | **Partial update**      | **Partial data** | **Updated resource** |
| **DELETE** | Remove resource         | Empty            | Success/error        |

## Best Practices

### 1. **Always Validate Input**

```javascript
if (username && username.length < 3) {
  return res.status(400).send("Username too short");
}
```

### 2. **Return Appropriate Status Codes**

- `200` - Success
- `400` - Bad Request (invalid data)
- `404` - Not Found
- `500` - Server Error

### 3. **Log Important Actions**

```javascript
console.log(`Student ${studentId} updated successfully`);
```

### 4. **Handle Edge Cases**

```javascript
// Check if student exists before updating
const checkQuery = "SELECT id FROM student WHERE id = ?";
connection.query(checkQuery, [studentId], (err, results) => {
  if (results.length === 0) {
    return res.status(404).send("Student not found");
  }
  // Proceed with update
});
```

## Complete Workflow

1. **User clicks "Edit" button** on `/users` page
2. **GET `/users/:id/edit`** - Shows edit form with current data
3. **User fills form** - Only the fields they want to change
4. **POST with PATCH override** - Submits form to PATCH endpoint
5. **Server validates** - Checks for valid fields
6. **Database update** - Updates only provided fields
7. **Redirect** - Back to `/users` page to see changes

## Troubleshooting

### Common Issues

1. **Method Override Not Working**

   - Ensure `method-override` middleware is configured
   - Check form action includes `?_method=PATCH`

2. **No Fields Updated**

   - Verify form field names match expected properties
   - Check if fields are empty (they're ignored)

3. **Database Errors**

   - Check SQL query syntax
   - Verify table structure matches expectations

4. **404 Errors**
   - Confirm student ID exists in database
   - Check route parameter matching

This PATCH implementation provides a robust, secure way to perform partial updates on your student data while maintaining data integrity and providing a good user experience.
