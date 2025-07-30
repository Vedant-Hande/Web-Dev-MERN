const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "vedant9699#",
  connectTimeout: 10000, // 10 seconds timeout
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
  ];
};

// Handle connection errors
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }
  console.log("Connected to MySQL successfully!");

  // Execute query after successful connection

  let query = "INSERT INTO student (id, username, email) VALUES ?";
  let users = [];
  for (let i = 0; i < 100; i++) {
    users.push(getRandomUser());
  }
  connection.query(query, [users], (error, results) => {
    if (error) {
      console.error("Error showing databases:", error.message);
      return;
    }
    console.log(results);
    connection.end(); // Close the connection
  });
});

// console.log(getRandomUser());
