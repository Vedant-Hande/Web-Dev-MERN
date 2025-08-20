const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const { error } = require("console");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Database connection setup
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "vedant9699#",
  connectTimeout: 10000, // 10 seconds timeout
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }
  console.log("Connected to MySQL successfully!");
});

app.get("/", (req, res) => {
  try {
    let query = "SELECT COUNT(*) FROM student";
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        return res.status(500).send("Database error");
      }
      res.render("index.ejs", { result: results[0]["COUNT(*)"] });
    });
  } catch (err) {
    console.error("Error showing databases:", err.message);
  }
});

app.get("/users", (req, res) => {
  try {
    let query = "SELECT * FROM student";
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        return res.status(500).send("Database error");
      }
      // console.log(results);
      res.render("users.ejs", { result: results });
    });
  } catch (err) {
    console.error("Error showing databases:", err.message);
  }
});

// GET route to show add student form
app.get("/users/add", (req, res) => {
  res.render("add.ejs");
});

app.patch("/users/edit", (req, res) => {});

// POST route to add a new student
app.post("/users/add", (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res.status(400).send("Username and email are required");
    }

    if (!email.includes("@")) {
      return res.status(400).send("Invalid email format");
    }

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

// PATCH route to update a student's information
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

// DELETE route to remove a student
app.delete("/users/:id", (req, res) => {
  try {
    const studentId = req.params.id;
    let query = "DELETE FROM student WHERE id = ?";

    connection.query(query, [studentId], (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        return res.status(500).send("Database error");
      }

      if (results.affectedRows === 0) {
        return res.status(404).send("Student not found");
      }

      console.log(`Student ${studentId} deleted successfully`);
      res.redirect("/users");
    });
  } catch (err) {
    console.error("Error deleting student:", err.message);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//   ];
// };

//   let query = "INSERT INTO student (id, username, email) VALUES ?";
//   let users = [];
//   for (let i = 0; i < 100; i++) {
//     users.push(getRandomUser());
//   }

//   connection.query(query, [users], (error, results) => {
//     if (error) {
//       console.error("Error showing databases:", error.message);
//       return;
//     }
//     console.log(results);
//   });
// });
