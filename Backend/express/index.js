const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log("server is listening", port);
});

app.get("/", (req, res) => {
  res.send({
    name: "vedant",
    email: "vedant@gmail.com",
    description: "learning import vs require package ",
    main: "script.js",
  });
});

app.get("/car", (req, res) => {
  const cars = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];
  const carList = cars.map((car) => `<li>${car}</li>`).join("");
  res.send(`<h1>Cars</h1><ul>${carList}</ul>`);
});

// 404 Not Found Handler
app.use((req, res) => {
  //   res.status(404).send({ error: "Route not found" });
  res.status(404).json({ error: "Route not found" });
});
