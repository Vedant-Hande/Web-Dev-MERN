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
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
  };
};

// Handle connection errors
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }
  console.log("Connected to MySQL successfully!");

  // Execute query after successful connection

  let query = "INSERT INTO users (id, username, email) VALUES ()";
  let user = [getRandomUser];
  connection.query(query, user, (error, results) => {
    if (error) {
      console.error("Error showing databases:", error.message);
      return;
    }
    console.log("Available databases:", results);
    console.log(results[0]);
    connection.end(); // Close the connection
  });
});

// console.log(getRandomUser());
