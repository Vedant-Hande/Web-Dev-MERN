# Accessing Database Data in EJS Templates

## Overview

This guide explains how to properly access and display all data that comes from your MySQL database in EJS templates.

## Current Setup

Your Node.js application fetches data from the `student` table and passes it to EJS templates as `result`.

## Basic Data Access

### 1. Accessing the Data Array

```ejs
<!-- result is the array of database objects -->
<%= result.length %>  <!-- Get total number of records -->
```

### 2. Looping Through All Records

```ejs
<% result.forEach(function(student) { %>
  <div>
    ID: <%= student.id %>
    Name: <%= student.username %>
    Email: <%= student.email %>
  </div>
<% }); %>
```

### 3. Conditional Data Display

```ejs
<% if (result && result.length > 0) { %>
  <!-- Display data when records exist -->
  <% result.forEach(function(student) { %>
    <div><%= student.username %></div>
  <% }); %>
<% } else { %>
  <!-- Show message when no data -->
  <p>No data found</p>
<% } %>
```

## Advanced Data Access Techniques

### 1. Filtering Data

```ejs
<!-- Count records with valid emails -->
<%= result.filter(student => student.email && student.email.includes('@')).length %>

<!-- Count active users -->
<%= result.filter(student => student.username && student.username.length > 0).length %>
```

### 2. Safe Property Access

```ejs
<!-- Handle null/undefined values -->
<%= student.username || 'No Name' %>
<%= student.email || 'No Email' %>
<%= student.phone || 'N/A' %>
```

### 3. Data Validation

```ejs
<% if (student.email && student.email.includes('@')) { %>
  <span class="valid-email"><%= student.email %></span>
<% } else { %>
  <span class="invalid-email">Invalid email</span>
<% } %>
```

## Complete Template Structure

### 1. Statistics Dashboard

```ejs
<div class="stats">
  <div class="stat-card">
    <div class="stat-number"><%= result.length %></div>
    <div class="stat-label">Total Students</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">
      <%= result.filter(student => student.email && student.email.includes('@')).length %>
    </div>
    <div class="stat-label">Valid Emails</div>
  </div>
</div>
```

### 2. Card View Display

```ejs
<div class="student-grid">
  <% result.forEach(function(student) { %>
    <div class="student-card">
      <div class="student-id">ID: <%= student.id %></div>
      <div class="student-name">
        <%= student.username || 'No Name' %>
      </div>
      <div class="student-email">
        <%= student.email || 'No Email' %>
      </div>
    </div>
  <% }); %>
</div>
```

### 3. Table View Display

```ejs
<table class="data-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Username</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <% result.forEach(function(student) { %>
      <tr>
        <td><%= student.id %></td>
        <td><%= student.username || 'N/A' %></td>
        <td><%= student.email || 'N/A' %></td>
      </tr>
    <% }); %>
  </tbody>
</table>
```

## Node.js Route Setup

### Current Route (index.js)

```javascript
app.get("/users", (req, res) => {
  try {
    let query = "SELECT * FROM student";
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        return res.status(500).send("Database error");
      }
      console.log(results);
      res.render("users.ejs", { result: results });
    });
  } catch (err) {
    console.error("Error showing databases:", err.message);
  }
});
```

## Database Schema Reference

### Student Table Structure

```sql
CREATE TABLE student (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255)
);
```

### Available Properties

- `student.id` - Unique identifier
- `student.username` - Student's username
- `student.email` - Student's email address

## Best Practices

### 1. Error Handling

```ejs
<% if (result && Array.isArray(result)) { %>
  <!-- Safe to iterate -->
<% } else { %>
  <p>Data format error</p>
<% } %>
```

### 2. Performance Optimization

```ejs
<!-- Limit display for large datasets -->
<% result.slice(0, 50).forEach(function(student) { %>
  <!-- Display first 50 records -->
<% }); %>
```

### 3. Debugging

```ejs
<!-- Show raw data for debugging -->
<pre><%= JSON.stringify(result, null, 2) %></pre>
```

## Common Patterns

### 1. Search/Filter Functionality

```ejs
<%
const searchTerm = req.query.search || '';
const filteredResults = result.filter(student =>
  student.username.toLowerCase().includes(searchTerm.toLowerCase())
);
%>
```

### 2. Pagination

```ejs
<%
const page = parseInt(req.query.page) || 1;
const limit = 10;
const startIndex = (page - 1) * limit;
const endIndex = page * limit;
const paginatedResults = result.slice(startIndex, endIndex);
%>
```

### 3. Sorting

```ejs
<%
const sortedResults = result.sort((a, b) =>
  a.username.localeCompare(b.username)
);
%>
```

## Troubleshooting

### Common Issues

1. **Data not displaying**

   - Check if `result` is passed correctly from Node.js
   - Verify database query is working
   - Use `console.log(results)` in Node.js route

2. **Undefined properties**

   - Always use fallback values: `<%= student.property || 'Default' %>`
   - Check database schema matches expected properties

3. **Template errors**
   - Ensure proper EJS syntax: `<% %>` for logic, `<%= %>` for output
   - Check for missing closing tags

### Debug Steps

1. Add `console.log(results)` in your Node.js route
2. Use `<pre><%= JSON.stringify(result, null, 2) %></pre>` in template
3. Check browser console for JavaScript errors
4. Verify database connection and query syntax

## Additional Resources

- [EJS Documentation](https://ejs.co/)
- [MySQL2 Documentation](https://github.com/sidorares/node-mysql2)
- [Express.js Documentation](https://expressjs.com/)

## Example Complete Template

See `views/users.ejs` for a complete working example with:

- Modern responsive design
- Statistics dashboard
- Card and table views
- Error handling
- Mobile-friendly layout
