const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    registeredAt: faker.date.past(),
  };
};

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app", // Uncomment and replace with your actual database name
  password: "vedant9699#",
  connectTimeout: 10000, // 10 seconds timeout
});

// Handle connection errors
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    console.error("Error code:", err.code);
    return;
  }
  console.log("Connected to MySQL successfully!");

  // Execute query after successful connection
  connection.query("SHOW TABLES", (error, results) => {
    if (error) {
      console.error("Error showing databases:", error.message);
      return;
    }
    console.log("Available databases:", results);
    connection.end(); // Close the connection
  });
});

console.log(getRandomUser());
